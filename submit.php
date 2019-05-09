<?php
$servername = "89.34.96.142";
$username = "mcgnnpe_adminsql";
$password = "mcgraham924";

// Create connection
$conn = mysqli_connect($servername, $username, $password);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
?>