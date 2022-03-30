<?php
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");
$data = [
    "email"=>"bum123@o2.pl",
    "token"=>"daw45123nif132",
    "code"=>200,
];
header('Content-Type: application/json; charset=utf-8');
echo json_encode($data);