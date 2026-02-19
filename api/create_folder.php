<?php
include 'connect.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (!isset($data['nom_folder'])) {
        echo json_encode(['success' => false, 'message' => 'Données manquantes']);
        exit;
    }

    $nom_folder = trim($data['nom_folder']);

    if (empty($nom_folder)) {
        echo json_encode(['success' => false, 'message' => 'Le nom du dossier ne peut pas être vide']);
        exit;
    }

    try {
        // Generate a unique folder ID (14 characters)
        // $id_folder = bin2hex(random_bytes(7)); // 14 character hex string
        $id_folder = $data['id_folder'];
        $stmt = $con->prepare('INSERT INTO folder (id_folder, nom_folder) VALUES (?, ?)');
        $stmt->execute([$id_folder, $nom_folder]);

        echo json_encode(['success' => true, 'message' => 'Dossier créé avec succès', 'id_folder' => $id_folder]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Erreur base de données: ' . $e->getMessage()]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée']);
}
?>