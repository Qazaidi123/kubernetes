<?php
$file = "data.json";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    $existing = [];
    if (file_exists($file)) {
        $existing = json_decode(file_get_contents($file), true);
    }

    $existing[] = $data;

    file_put_contents($file, json_encode($existing));
    echo "Saved";
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($file)) {
        echo file_get_contents($file);
    } else {
        echo "[]";
    }
}
?>
