<?php
if (isset($_GET["url"])) {

  header("Access-Control-Allow-Origin: *");
  $data = readfile($_GET["url"]);
}
