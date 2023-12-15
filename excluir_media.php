<?php
$aluno = $_POST['aluno'];

$db = new SQLite3('nome_do_banco.db');
$db->exec("DELETE FROM medias WHERE aluno='$aluno'");

$db->close();
?>
