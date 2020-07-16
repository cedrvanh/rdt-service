<?php

if (isset($_POST["submit"])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $email_to = "c.vanhaegenberg@outlook.com";
    $email_subject = "RDT - New Form Submission";
    $email_body = "Je hebt een nieuw bericht van $name. \n" . "Bericht: \n $message";

    $headers = "From: $email_to \r\n";

    $headers .= "Reply-To: $email \r\n";

    mail($email_to, $email_body, $headers);
}