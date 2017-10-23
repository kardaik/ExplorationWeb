<?php
$servername = "localhost";
$username = "root";
$dbname = "bd_roger";

try {
    $conn = new PDO('mysql:host=localhost;dbname=bd_roger;', 'root', '');
    echo "Connected successfully"; 
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }
$nom = $_POST["nom"];
$score = $_POST["score"];
$Tag = $nom.$score;

echo $nom;
echo $score;
//insert in bd
$conn->exec('INSERT INTO tblscore(Nom, Score, Tag) VALUES("'.$nom.'",'.$score.',"'.$Tag.'")');
$reponse = $conn->query('SELECT * FROM tblscore');

$conn = null;

header('Location: index.html');
exit();
?> 