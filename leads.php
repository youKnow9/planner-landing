<?php
ini_set('display_errors', 1); ini_set('display_startup_errors', 1); error_reporting(E_ALL); 
$dbc = mysqli_connect('localhost', 'root', '', 'leads');

$query = "INSERT INTO leads(phone, first_name)
        VALUES (1, 'Lena')";

$result = mysqli_query($dbc, $query);
mysqli_close($dbc);
?>