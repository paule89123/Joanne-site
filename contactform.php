<?php

if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$mailFrom = $_POST['email'];
	$message = $_POST['message'];

	$mailTo = "paulo1chop@hotmail.com";
	$subject = "Message received via my website"
	$headers = "Message received via my website"

	mail($mailTo, $subject, $message, $headers);
	header("Location: index.html");
}

<?php
 
}
?>