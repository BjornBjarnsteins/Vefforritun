<?php
header('Content-Type: text/html; charset=utf-8');

require('todos.class.php');

// TODO búa til todos.db
try {
  $todos = new Todos(new PDO('sqlite:dbname=todos.db'));
  echo 'database loaded';
} catch (PDOException $e) {
  echo 'Connection failed: ' . $e->getMessage();
}

// lykill sem notaður er
$key = isset($_GET['key']) ? $_GET['key'] : '';

$errors = array();

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST')
{
	// TODO meðhöndla POST frá formi og hugsanlegar villur
}

// Sækja færslur svo hægt sé að birta
$todolist->Fetch($key);

include('views/header.php');
include('views/todos.php');
include('views/footer.php');
