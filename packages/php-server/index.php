<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');

$response = [];

$host = 'localhost';
$port = 4001;
$path = sprintf('http://%s:%s%s', $host, $port, $_SERVER['REQUEST_URI']);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $path);
curl_setopt($ch, CURLOPT_HEADER, FALSE);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
$result = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

echo $result;