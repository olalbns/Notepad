<?php
include 'connect.php';
header('Content-Type: application/json');
$query = isset($_GET['query']) ? $_GET['query'] : null;
if ($query === null) {
    echo json_encode(["success" => false, "message" => "Missing query"]);
    exit;
}
$stmt = $con->prepare("SELECT * FROM note WHERE nom_note LIKE ? LIMIT 40");
$stmt->execute(["%$query%"]);
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

$stmt = $con->prepare("SELECT * FROM folder WHERE nom_folder LIKE ? LIMIT 40");
$stmt->execute(["%$query%"]);
$resul = $stmt->fetchAll(PDO::FETCH_ASSOC);
if ($result !== [] || $resul !== []) {
    echo json_encode([
        "success" => true,
        "data" => [
            "notes" => $result,
            "folders" => $resul
        ]
    ]);
} else {
    echo json_encode([
        "success" => false
    ]);
}