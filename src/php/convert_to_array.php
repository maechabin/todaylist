<?php
class Convert_to_array {

  private function csv() {

    $csv = array();
    $file = "../../csv/list.csv";
    $data = file_get_contents($file);
    $data = mb_convert_encoding($data, "utf-8", "sjis");
    echo $data;

  }

  public function init() {
    $this->csv();
  }

}
