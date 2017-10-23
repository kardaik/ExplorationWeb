<form method="get"  action="Recherche.php">
<h1>Recherche.</h1>
<p>Recherche <input id="Recherche" name="Recherche" ></p>
<input type="submit" value="submit"  >
</form>
<?php
	try
	{
		$conn = new PDO('mysql:host=localhost;dbname=bd_roger;charset=utf8', 'root', '');
	}
	catch(Exception $e)
	{
		die('Erreur : '.$e->getMessage());
	}
	$Tag = "%".$_GET["Recherche"]."%";

	$reponse = $conn->query('SELECT * FROM tblscore WHERE Tag LIKE \''.$Tag.'\'');

	while ($donnees = $reponse->fetch())
	{
		 echo '<br>'."\r\n";
		 echo $donnees['Nom'];
		 echo '<td>'."\r\n";
		 echo $donnees['Score'];
	}
?><br> 
        
<a href="index.html">Retour</a>