<?php
session_start();

if(isset($_SESSION['user_username'])) {
	session_destroy();
	//unset($_SESSION['user_username']);
	unset($_SESSION['user_username']);
	header("Location: rin.php");
} else {
	header("Location: rin.php");
}
?>