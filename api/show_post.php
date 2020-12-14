<?php
require_once "classes/DB.php";


if(isset($_GET['id'])){
	$db = new DB;
	$id = trim(strip_tags($_GET['id']));

	if(is_numeric($id)){
	    echo $db->get_single_post($id);
	} else {
	    echo json_encode([
	        'message' => 'id must be and integer'
	    ]);
	}
}else {
	echo json_encode([
	    'message' => 'unable to get id'
	]);
}
