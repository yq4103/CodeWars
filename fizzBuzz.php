<?php

$n = (int)readline();

for ($i = 1; $i < $n; $i++)
{
  $val = ($i % 3 ? "" : "fizz").($i % 5 ? "" : "buzz").($i % 3 ? "" : ( $i % 5 ? "" : ""));
  echo (!$val ? $i : $val).", ";
 }
if ($i === $n)
{
  $val = ($i % 3 ? "" : "fizz").($i % 5 ? "" : "buzz").($i % 3 ? "" : ( $i % 5 ? "" : ""));
  echo (!$val ? $i : $val);
}

?>