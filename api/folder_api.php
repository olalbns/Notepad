<?php
include 'connect.php';
header('Content-Type: application/json');
$folder_id = isset($_GET['folder_id']) ? $_GET['folder_id'] : null;
if ($folder_id === null) {
    echo json_encode(["success" => false, "message" => "Missing folder_id"]);
    exit;
}
$stmt = $con->prepare("SELECT * FROM note WHERE folder_note = ? LIMIT 40");
$stmt->execute([$folder_id]);
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
if ($result !== []){ 
    echo json_encode([
        "success"=> true,
        "data" => $result
    ]);
} else {
    echo json_encode([
        "success" => false
    ]);
}