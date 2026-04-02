<?php

header("Content-Type: application/json");

$host = "mysql";
$user = "root";
$password = "root";
$db = "exploreworld";

$conn = new mysqli($host, $user, $password, $db);

if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed"]));
}

$sql = "SELECT name, description, image FROM destinations";
$result = $conn->query($sql);

$data = array();

while($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);

$conn->close();

?>
