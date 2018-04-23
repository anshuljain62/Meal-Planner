<?php

$dbServer='localhost';
$dbName='db1';
$dbUser='root';
$dbPwd='';

$dbCon=mysql_connect($dbServer,$dbUser,$dbPwd) or die('could not connect to the database'.mysql_error());
mysql_select_db($dbName,$dbCon);

$gender=mysql_real_escape_string($_POST['gender']);
$height=mysql_real_escape_string($_POST['height']);
$weight=mysql_real_escape_string($_POST['weight']);
$activity=mysql_real_escape_string($_POST['activity']);
$age=mysql_real_escape_string($_POST['age']);

$qryIns="insert into healthdetail (`gender`,`height`,`weight`,`activity`,`age`) 
         values('$gender','$height','$weight','$activity','$age') ";

$resInt=mysql_query($qryIns);
if($resInt)
{
  //echo "info inserted";
  header("location:main.html");
}
else
{
  print"problem in inserting";
}

mysql_close();
?>