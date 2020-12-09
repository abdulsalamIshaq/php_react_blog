<?php
require_once "classes/DB.php";
$db = new DB;
$id = trim(strip_tags($_GET['id']));

if(is_numeric($id)){
    echo $db->get_single_post($_GET['id']);
} else {
    echo json_encode([
        'message' => 'id must be and integer'
    ]);
}