<h1>TOP 5</h1>
<?php
	try
	{
		$conn = new PDO('mysql:host=localhost;dbname=bd_roger;charset=utf8', 'root', '');
	}
	catch(Exception $e)
	{
		die('Erreur : '.$e->getMessage());
	}
	$reponse = $conn->query('SELECT Nom,MIN(Score) AS Score FROM tblscore GROUP BY Nom ORDER BY Score ASC LIMIT 5');

	while ($donnees = $reponse->fetch())
	{
		 echo '<br>'."\r\n";
		 echo $donnees['Nom'];
		 echo '<td>'."\r\n";
		 echo $donnees['Score'];
	}
?><br> 
        
<a href="index.html">Retour</a>