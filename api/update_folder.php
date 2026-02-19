<?php
include 'connect.php';
header('Content-Type: application/json');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (!isset($data['nom_folder']) || !isset($data['id_folder'])) {
        echo json_encode(['success' => false, 'message' => 'Données manquantes']);
        exit;
    }

    $nom_folder = trim($data['nom_folder']);
    $id_folder = trim($data['id_folder']);

    if (empty($nom_folder) || empty($id_folder)) {
        echo json_encode(['success' => false, 'message' => 'Le nom du dossier et l\'ID sont requis']);
        exit;
    }

    try {
        // Update folder name in the `folder` table
        $stmt = $con->prepare('UPDATE folder SET nom_folder=? WHERE id_folder=?');
        $stmt->execute([$nom_folder, $id_folder]);

        echo json_encode(['success' => true, 'message' => 'Dossier mis à jour avec succès', 'id_folder' => $id_folder]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Erreur base de données: ' . $e->getMessage()]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée']);
}
?>