<?php
include 'connect.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (!isset($data['nom_note']) || !isset($data['content_note'])) {
        echo json_encode(['success' => false, 'message' => 'Données manquantes']);
        exit;
    }
    if (empty($data['id_folder'])) {
        echo json_encode(['success' => false, 'message' => 'Sélectionnez un dossier pour créer une note', 'current_folder' => $data['id_folder'] ]);
        exit;
    }
    $nom_note = trim($data['nom_note']);
    $content_note = trim($data['content_note']);
    $id_note = "note_" . bin2hex(random_bytes(7));
    $id_folder = $data['id_folder'];
    if (empty($nom_note)) {
        echo json_encode(['success' => false, 'message' => 'Le titre ne peut pas être vide']);
        exit;
    }

    try {
        $stmt = $con->prepare('INSERT INTO note (id_note, nom_note, content_note, folder_note) VALUES (?, ?, ?, ?)');
        $stmt->execute([$id_note, $nom_note, $content_note, $id_folder]);

        echo json_encode(['success' => true, 'message' => 'Note créée avec succès', 'id_note' => $id_note]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Erreur base de données: ' . $e->getMessage()]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée']);
}
?>