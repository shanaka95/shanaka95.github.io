<?php
$db=mysqli_connect('localhost','root','anuththara3862##123','me');
$q="insert into contact(`name`,`email`,`message`) values ('{$_GET[name]}','{$_GET[email]}','{$_GET[message]}');";
mysqli_query($db,$q) ;
mysqli_commit($db) ;
mysqli_close($db);
header("Content-Type: text/plain");
echo '<center>Message Sent Succssfully!</center>';

?>