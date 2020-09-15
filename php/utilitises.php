<?php

function connexion(){
    $dbn = "mysql:dbname=camilletuzperso;host=camilletuzperso.mysql.db";
    $user = "camilletuzperso";
    $psw = "Nash1994";

    try {
        $cnx = new PDO($dbn, $user, $psw);
    } catch (PDOException $e) {
        echo 'Connexion échouée : ' . $e->getMessage();
    }

    return $cnx;
}

function recupData(){

    if (isset($_POST['btnSubmit'])) {
        $nom = $_POST['lastName'];
        $prenom = $_POST['firstName'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        $result = [$nom, $prenom, $email, $message];
    }
    return $result;
};

function addData($tableau){

    $cnx = connexion();

    $query = $cnx->prepare('INSERT INTO user (nom, prenom, email, message) VALUES (?, ?, ?, ?)');
    $query->execute([$tableau[0], $tableau[1], $tableau[2], $tableau[3]]);

    $cnx = null;
}

?>