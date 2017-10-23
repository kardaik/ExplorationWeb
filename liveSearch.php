<?php
//connexion
$link = mysqli_connect("localhost", "root", "", "bd_roger");

 
// Test connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
 
if(isset($_REQUEST['term'])){
    // select
    $sql = "SELECT * FROM tblscore WHERE Tag LIKE ?";
    
    if($stmt = mysqli_prepare($link, $sql)){
        //lie les variables comme parametre de la declaration
        mysqli_stmt_bind_param($stmt, "s", $param_term);
        
        // Set parametre
        $param_term = $_REQUEST['term'] . '%';
        
        // execution de la declaration
        if(mysqli_stmt_execute($stmt)){
            $result = mysqli_stmt_get_result($stmt);
            
            // Check number of rows in the result set
            if(mysqli_num_rows($result) > 0){
                // Fetch les ligne de resultat en array
				$tbl = array();
                while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
					array_push($tbl, $row);
                }
				echo json_encode ($tbl);
            } else{
                echo json_encode("rien trouver");
            }
        } else{
            echo json_encode("ERROR: Could not able to execute $sql. " . mysqli_error($link));
        }
    }
     
    // fermeture de declaration
    mysqli_stmt_close($stmt);
}
 
// fermeture de declaration
mysqli_close($link);
?>