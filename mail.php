<?php

header('Content-Type: application/json');


$name = $_POST['name'];
$message = "Message from user: $name";

$result = mail('sergeipaderov@gmail.com', 'Subject', $message);

echo json_encode(array(
		'status' => $result
	));