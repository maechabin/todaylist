<?php
//if (!function_exists('json_encode')) {

    function jsonEncode($a=false)
    {
        if (is_null($a)) return 'null';
        if ($a === false) return 'false';
        if ($a === true) return 'true';
        if (is_scalar($a))
        {
            if (is_float($a))
            {
                // Always use "." for floats.
                return floatval(str_replace(",", ".", strval($a)));
            }

            if (is_string($a))
            {
                static $jsonReplaces = array(array("\\", "/", "\n", "\t", "\r", "\b", "\f", '"'), array('\\\\', '\\/', '\\n', '\\t', '\\r', '\\b', '\\f', '\"'));
                return '"' . str_replace($jsonReplaces[0], $jsonReplaces[1], $a) . '"';
            }
            else
            return $a;
        }
        $isList = true;
        for ($i = 0, reset($a); $i < count($a); $i++, next($a))
        {
            if (key($a) !== $i)
            {
                $isList = false;
                break;
            }
        }
        $result = array();
        if ($isList)
        {
            foreach ($a as $v) $result[] = jsonEncode($v);
            return '[' . join(',', $result) . ']';
        }
        else
        {
            foreach ($a as $k => $v) $result[] = jsonEncode($k).':'.jsonEncode($v);
            return '{' . join(',', $result) . '}';
        }
    }
/*

function jsonEncode($data) {

  switch ($type = gettype($data)) {
    case 'NULL':
      return 'null';

    case 'boolean':
      return ($data ? 'true' : 'false');

    case 'integer':

    case 'double':

    case 'float':
      return $data;

    case 'string':
      return '"' . addslashes($data) . '"';

    case 'object':
      $data = get_object_vars($data);

    case 'array':
      $output_index_count = 0;
      $output_indexed = array();
      $output_associative = array();

      foreach ($data as $key => $value) {
        $output_indexed[] = jsonEncode($value);
        $output_associative[] = jsonEncode($key) . ':' . jsonEncode($value);

        if ($output_index_count !== NULL && $output_index_count++ !== $key) {
            $output_index_count = NULL;
        }
      }

      if ($output_index_count !== NULL) {
        return '[' . implode(',', $output_indexed) . ']';
      } else {
        return '{' . implode(',', $output_associative) . '}';
      }
      default:
      return ''; // Not supported

  }

}
*/
//}
