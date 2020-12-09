<?php
require_once "classes/DB.php";
$db = new DB;
echo $db->get_post_with_category();