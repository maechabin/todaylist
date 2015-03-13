<?php

if (isset($_GET["url"])) {

  header("Access-Control-Allow-Origin: *");
  $a = readfile($_GET["url"]);

  echo $a;

}
