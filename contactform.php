<?php

if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$mailFrom = $_POST['mail'];
	$message = $_POST['message'];

	$mailTo = "paulo1chop@hotmail.com";
	$subject = "Message received via my website"
	$headers = "Message received via my website from: ".$mailFrom;
	$txt = 

	mail($mailTo, $subject, $message, $headers);
	header("Location: index.html");
}

<?php
 
}
?>