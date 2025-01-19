<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tindup_models";


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Połączenie nieudane: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = $_POST['username'];
    $pass = $_POST['password'];

    $sql = "INSERT INTO users (username, password) VALUES ('$user', '$pass')";

    if ($conn->query($sql) === TRUE) {
        echo "Rejestracja zakończona sukcesem";
    } else {
        echo "Błąd: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
