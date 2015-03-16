<?php
class Convert_to_array {

  private function csv() {

    $csv = array();
    $file = "../../csv/list.csv";
    $data = file_get_contents($file);
    $data = mb_convert_encoding($data, "utf-8", "sjis");

echo $data;

    $temp = tmpfile();

    fwrite($temp, $data);
    rewind($temp);

    while (($data = fgetcsv($temp, 0, ",")) !== false) {

      $data = implode(",", $data);
      //$csv[] = htmlentities($data);
      $csv[] = $data;
    }

    $json = jsonEncode($csv, JSON_UNESCAPED_UNICODE);
    //print $json;

    fclose($temp);

  }

  public function init() {
    $this->csv();
  }

}
