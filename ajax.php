<?php
$db=mysqli_connect('localhost','root','anuththara3862##123','me') or die('error connecting to database');

$var = $_GET['div'];
$ar=array('def_portfolio'=>'def_portfolio','soft_sft'=>'soft_sft','finance'=>'finance','zchool'=>'zchool','sh'=>'sh','gw'=>'gw','rg'=>'rg');

$query = "select `content` from me.content where `div`='{$ar[$var]}' ";
$result = mysqli_query($db, $query) or die('could not query database');
$row=mysqli_fetch_array($result,MYSQLI_ASSOC);
header("Content-Type: text/plain");
echo $row["content"];

?>