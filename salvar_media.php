<?php
$aluno = $_POST['aluno'];
$media = $_POST['media'];

$db = new SQLite3('nome_do_banco.db');
$db->exec('CREATE TABLE IF NOT EXISTS medias (aluno TEXT, nota1 REAL, nota2 REAL, nota3 REAL, media REAL)');

$stmt = $db->prepare('INSERT OR REPLACE INTO medias (aluno, nota1, nota2, nota3, media) VALUES (:aluno, :nota1, :nota2, :nota3, :media)');
$stmt->bindValue(':aluno', $aluno, SQLITE3_TEXT);
$stmt->bindValue(':nota1', $_POST['nota1'], SQLITE3_FLOAT);
$stmt->bindValue(':nota2', $_POST['nota2'], SQLITE3_FLOAT);
$stmt->bindValue(':nota3', $_POST['nota3'], SQLITE3_FLOAT);
$stmt->bindValue(':media', $media, SQLITE3_FLOAT);
$stmt->execute();

$db->close();
?>
