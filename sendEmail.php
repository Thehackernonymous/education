<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
echo "Hello, PHP is working!";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Set your email address where you want to receive the form submissions
    $to = "rj895585@gmail.com";

    // Subject and headers
    $subject = "New Form Submission from $name";
    $headers = "From: $email";

    // Compose the email message
    $emailMessage = "Name: $name\n";
    $emailMessage .= "Email: $email\n\n";
    $emailMessage .= "Message:\n$message";

    // Send the email
    mail($to, $subject, $emailMessage, $headers);
}
?>
