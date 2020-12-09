<?php
require_once "classes/DB.php";
$db = new DB;
echo $db->get_categories();