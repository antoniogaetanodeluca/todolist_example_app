<?php
  $jsonObject  = [];
  if(isset($_POST['json'])){
    $jsonObject = json_decode($_POST["json"]);
    echo json_encode($jsonObject);
  }
?>
