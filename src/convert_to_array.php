<?php
class Convert_to_array {

  private function csv() {

    $csv = array();
    $file = "../list.csv";
    $data = file_get_contents($file);
    $data = mb_convert_encoding($data, "utf-8", "sjis");
    $temp = tmpfile();

    fwrite($temp, $data);
    rewind($temp);

    while (($data = fgetcsv($temp, 0, ",")) !== false) {
      $csv[] = $data;
    }

    $json = json_encode($csv, JSON_UNESCAPED_UNICODE);

    // echo $_GET["callback"] . "(" . $json . ")";
    print $json;
    fclose($temp);

  }

  public function init() {
    $this->csv();
  }

}
