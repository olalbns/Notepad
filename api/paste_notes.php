<?php
include "connect.php";

header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        if (isset($data["note_ids"]) && isset($data["target_folder_id"]) && isset($data["is_cut"])) {
            $note_ids = $data["note_ids"];
            $target_folder_id = $data["target_folder_id"];
            $is_cut = $data["is_cut"];

            // Validate that target folder exists
            try {
                $check_folder = $con->prepare('SELECT id_folder FROM folder WHERE id_folder = ?');
                $check_folder->execute([$target_folder_id]);
                
                if ($check_folder->rowCount() === 0) {
                    echo json_encode(['success' => false, 'message' => 'Dossier cible non trouvé']);
                    exit;
                }
            } catch (PDOException $e) {
                echo json_encode(['success' => false, 'message' => 'Erreur base de données: ' . $e->getMessage()]);
                exit;
            }

            try {
                $success_count = 0;
                $error_count = 0;

                foreach ($note_ids as $id_note) {
                    if ($is_cut) {
                        // Cut: Move note to target folder
                        $stmt = $con->prepare('UPDATE note SET folder_note = ? WHERE id_note = ?');
                        if ($stmt->execute([$target_folder_id, $id_note])) {
                            $success_count++;
                        } else {
                            $error_count++;
                        }
                    } else {
                        // Copy: Duplicate note with new ID
                        // First, get the note details
                        $select_stmt = $con->prepare('SELECT nom_note, content_note FROM note WHERE id_note = ?');
                        $select_stmt->execute([$id_note]);
                        $note = $select_stmt->fetch(PDO::FETCH_ASSOC);

                        if ($note) {
                            // Generate new ID for copy
                            $new_id_note = "note_" . bin2hex(random_bytes(7));
                            
                            // Insert the duplicate note
                            $insert_stmt = $con->prepare('INSERT INTO note (id_note, nom_note, content_note, folder_note) VALUES (?, ?, ?, ?)');
                            if ($insert_stmt->execute([$new_id_note, $note['nom_note'], $note['content_note'], $target_folder_id])) {
                                $success_count++;
                            } else {
                                $error_count++;
                            }
                        } else {
                            $error_count++;
                        }
                    }
                }

                if ($success_count > 0) {
                    $action = $is_cut ? 'déplacées' : 'copiées';
                    echo json_encode([
                        'success' => true,
                        'message' => $success_count . ' note(s) ' . $action . ' avec succès',
                        'success_count' => $success_count,
                        'error_count' => $error_count
                    ]);
                } else {
                    echo json_encode([
                        'success' => false,
                        'message' => 'Erreur lors du traitement des notes',
                        'success_count' => $success_count,
                        'error_count' => $error_count
                    ]);
                }
            } catch (PDOException $e) {
                echo json_encode(['success' => false, 'message' => 'Erreur base de données: ' . $e->getMessage()]);
            }
        } else {
            echo json_encode(['success' => false, 'message' => 'Données manquantes (note_ids, target_folder_id, is_cut)']);
        }
        break;

    default:
        echo json_encode(["success" => false, "message" => "Méthode non autorisée"]);
        break;
}
?>
