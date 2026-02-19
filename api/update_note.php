<?php
include 'connect.php';
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (!isset($data['id_note']) || !isset($data['content_note'])) {
        echo json_encode(['success' => false, 'message' => 'Données manquantes (id_note et content_note requis)']);
        exit;
    }

    $id_note = trim($data['id_note']);
    $content_note = trim($data['content_note']);
    $content_text = isset($data['content_text']) ? trim($data['content_text']) : '';

    if (empty($id_note)) {
        echo json_encode(['success' => false, 'message' => 'L\'ID de la note est requis']);
        exit;
    }

    try {
        // Vérifier que la note existe
        $checkStmt = $con->prepare('SELECT id_note FROM note WHERE id_note = ?');
        $checkStmt->execute([$id_note]);
        if ($checkStmt->rowCount() === 0) {
            echo json_encode(['success' => false, 'message' => 'Note non trouvée']);
            exit;
        }

        // Mettre à jour la note
        $stmt = $con->prepare('UPDATE note SET content_note = ? WHERE id_note = ?');
        $stmt->execute([$content_note, $id_note]);

        echo json_encode(['success' => true, 'message' => 'Note mise à jour avec succès', 'id_note' => $id_note]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Erreur base de données: ' . $e->getMessage()]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée']);
}
?>