<?php

$name = $_POST['name'];
$id = $_POST['id'];

if (strlen($name) == 0 || strlen($id) == 0) {
    echo "<script>alert('Please fill form fields');</script>";
} elseif ($name == 'Mesut Kutlu' && $id == '613782') {
    echo "Your grade is 93.67";
} else {
    echo "<script>alert('Grade not found.');</script>";
}