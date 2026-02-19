<?php
include "connect.php";

header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        if (isset($data["request"]) && isset($data["id"]) && !empty($data["request"])) {
            switch ($data["request"]) {
                case 'delete_note':
                    try {
                        $stmt = $con->prepare('DELETE FROM note WHERE id_note=?');
                        $stmt->execute([$data["id"]]);

                        echo json_encode(['success' => true, 'message' => 'Note supprimer avec succès', 'id_note' => $data["id"]]);
                    } catch (PDOException $e) {
                        echo json_encode(['success' => false, 'message' => 'Erreur base de données: ' . $e->getMessage()]);
                    }
                    break;

                case 'delete_folder':
                    try {
                        $stmt = $con->prepare('DELETE FROM folder  WHERE id_folder=?');
                        $stmt->execute([$data["id"]]);

                        echo json_encode(['success' => true, 'message' => 'Dossier supprimer succès', 'id_folder' => $data["id"]]);
                    } catch (PDOException $e) {
                        echo json_encode(['success' => false, 'message' => 'Erreur base de données: ' . $e->getMessage()]);
                    }
                    break;

                default:
                    // http_response_code(400);
                    json_encode(["success" => false, "message" => "Requete de supression non valide"]);
                    break;
            }
        } else {
            // http_response_code(422);
            echo json_encode(['success' => false, 'message' => 'Données manquantes']);
        }
        break;

    default:
        // http_response_code(405);
        echo json_encode(["success" => false, "message" => "Méthode non autorisée"]);
        break;
}
?>