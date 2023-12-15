<?php
$aluno = $_GET['aluno'];

$db = new SQLite3('nome_do_banco.db');
$result = $db->query("SELECT * FROM medias WHERE aluno='$aluno'");
$data = $result->fetchArray(SQLITE3_ASSOC);

echo json_encode($data);

$db->close();
?>
