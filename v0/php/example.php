<?php
header('Content-Type:text/plain');


require_once 'pooya.php';
$a = new pooya('YOUR_USERNAME', 'YOUR_PASSWORD');

echo 'Key: ' . $a->get_key();
echo "\n";
echo 'Notifications: ' . $a->notifications();
echo "\n";
echo 'Application Data: ' . $a->data();
