		//pour afficher le mouvement
		var mouvement = document.getElementById("mouv");
		
		
		//variable
		var compteur = 0;
		var col = 0;
		var rows = 0;
		var roger = document.getElementById("table1").rows[0].cells[0].innerHTML;
		
		//fonctions utilitaire
		function compt(number){
			compteur = compteur+number;
			document.getElementById("compteur").innerHTML=compteur;
			document.getElementById("score").value=compteur;
		}
		function horsZone(){
			document.getElementById("myHeader").innerHTML = "Roger doit rester sur les cases grise!";
		}
		function dansLaZone(){
			document.getElementById("myHeader").innerHTML = "";
		}

		
		//fonction deplacement
		function gauche(){
			mouvement.innerHTML="Gauche";
			var ligne = document.getElementById("table1").rows[rows].cells;  //qui contient les éléments TD de la ligne
			if(ligne[col-1].id == "c")  // vérifie si la prochaine case est un corridor
			{
				ligne[col].innerHTML = "";  //j'enleve l'image
				col--;  //position suivante
				ligne[col].innerHTML = roger;  //je mets l'image dans la cell
				dansLaZone();
			}
			else if(ligne[col+1].id == "f"){
				ligne[col].innerHTML = "";  //j'enleve l'image
				col--;  //position suivante
				ligne[col].innerHTML = roger;  //je mets l'image dans la cell
				dansLaZone();
				alert("Roger est Sauver!");
			}
			else{
				horsZone();
			}
		}
		
		function droite(){
			mouvement.innerHTML="Droite";
			var ligne = document.getElementById("table1").rows[rows].cells;  //qui contient les éléments TD de la ligne
			if(ligne[col+1].id == "c")  // vérifie si la prochaine case est un corridor
			{
				ligne[col].innerHTML = "";  //j'enleve l'image
				col++;  //position suivante
				ligne[col].innerHTML = roger;  //je mets l'image dans la cell
				dansLaZone();
			}
			else if(ligne[col+1].id == "f"){
				ligne[col].innerHTML = "";  //j'enleve l'image
				col++;  //position suivante
				ligne[col].innerHTML = roger;  //je mets l'image dans la cell
				dansLaZone();
				alert("Roger est Sauver!");
			}
			else{
			horsZone();
			}
		}
		
		function bas(){
		mouvement.innerHTML="Bas";
		var ligne = document.getElementById("table1").rows[rows+1].cells[col];  //qui contient les éléments TD de la ligne
		console.log(ligne);
			if(ligne.id == "c")  // vérifie si la prochaine case est un corridor
			{
				 document.getElementById("table1").rows[rows].cells[col].innerHTML = "";  //j'enleve l'image
				rows++;  //position suivante
				ligne.innerHTML = roger;  //je mets l'image dans la cell
				dansLaZone();
			}
			else if(ligne[col+1].id == "f"){
				document.getElementById("table1").rows[rows].cells[col].innerHTML = "";  //j'enleve l'image
				rows++;  //position suivante
				ligne.innerHTML = roger;  //je mets l'image dans la cell
				dansLaZone();
				alert("Roger est Sauver!");
			}
			else{
				horsZone();
			}
		}
		
		function haut(){
		mouvement.innerHTML="Haut";
		var ligne = document.getElementById("table1").rows[rows-1].cells[col];  //qui contient les éléments TD de la ligne
		console.log(ligne);
			if(ligne.id == "c")  // vérifie si la prochaine case est un corridor
			{
				 document.getElementById("table1").rows[rows].cells[col].innerHTML = "";  //j'enleve l'image
				rows--;  //position suivante
				ligne.innerHTML = roger;  //je mets l'image dans la cell
				dansLaZone();
			}
			else if(ligne[col+1].id == "f"){
				document.getElementById("table1").rows[rows].cells[col].innerHTML = "";  //j'enleve l'image
				rows--;  //position suivante
				ligne.innerHTML = roger;  //je mets l'image dans la cell
				dansLaZone();
				alert("Roger est Sauver!");
			}
			else{
				horsZone();
			}
		}