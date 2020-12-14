<?php

// Allow from any origin
if(isset($_SERVER["HTTP_ORIGIN"]))
{
    // You can decide if the origin in $_SERVER['HTTP_ORIGIN'] is something you want to allow, or as we do here, just allow all
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
}
else
{
    //No HTTP_ORIGIN set, so we allow any. You can disallow if needed here
    header("Access-Control-Allow-Origin: *");
}

header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 600");    // cache for 10 minutes

if($_SERVER["REQUEST_METHOD"] == "OPTIONS")
{
    if (isset($_SERVER["HTTP_ACCESS_CONTROL_REQUEST_METHOD"]))
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT"); //Make sure you remove those you do not want to support

    if (isset($_SERVER["HTTP_ACCESS_CONTROL_REQUEST_HEADERS"]))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    //Just exit with 200 OK with the above headers for OPTIONS method
    exit(0);
}

require_once "config.php";

class DB {
    private $conn;

    public function __construct() {
        try {
            $this->conn = new PDO('mysql:host='.HOST.';dbname='.DBNAME, USERNAME, PASSWORD);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (Exception $e) {
            echo json_encode([
                'message' => $e->getMessage()
            ]);
        }      
    }

    public function get_post_with_category() {
        $query = $this->conn->prepare('SELECT * FROM posts as p 
                                        JOIN users as u ON
                                        u.id = p.user_id 
                                        JOIN categories as c ON 
                                        p.category_id = c.id 
                                        ORDER BY p.created_at DESC ');
        $query->execute();
        $row = $query->fetchAll();
        
        return json_encode($row);
    }

    public function get_single_post(int $id) {
        $query = $this->conn->prepare('SELECT * FROM posts as p
                                        JOIN users as u ON
                                        u.id = p.user_id 
                                        JOIN categories as c 
                                        ON p.category_id = c.id WHERE p.id = :id');
        $query->bindParam(':id', $id, PDO::PARAM_INT);
        $query->execute();
        $row = $query->fetchAll();

        return json_encode([
            'posts' => $row,
            //'next' => $this->get_next($id),
            //'prev' => $this->get_prev($id),
        ]);
    }

    public function get_categories() {
        $query = $this->conn->prepare('SELECT * FROM categories');
        $query->execute();
        $row = $query->fetchAll();

        return json_encode([
            'categories' => $row
        ]);
    }

    public function get_category_post(int $id) {
        $query = $this->conn->prepare('SELECT * FROM posts as p 
                                        JOIN users as u ON
                                        u.id = p.user_id
                                        JOIN categories as c 
                                        ON c.id = p.category_id
                                        WHERE p.category_id = :id  ORDER BY p.created_at DESC');
        $query->bindParam(':id', $id, PDO::PARAM_INT);
        $query->execute();
        $row = $query->fetchAll();

        return json_encode([
            'posts' => $row
        ]);
    }
}