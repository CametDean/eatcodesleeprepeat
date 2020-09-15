<?php

include "utilitises.php";

$newMessage = recupData();
addData($newMessage);

header("Location: http://www.camilletoulouse.fr/");

?>