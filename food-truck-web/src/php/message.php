<?php
$errormsg ='';
if(!isset($_POST)&& !empty($_POST))
{
    echo "Please click the Send Message Button";
}
if(empth($_POST['name'])||empth($_POST['emailA'])||empth($_POST['contmsg'])){
    $errormsg .= "\n Error: All fields are required";
}
$name = $_POST['name'];
$visitor_email=$_POST['emailA'];
$messageV = $_POST['contmsg';
$email_direction="cxlgo@gwu.edu";// Here is the address be sent

if(!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
$visitor_email)){
    $errormsg .= "\n Invaild emaill address";
}

if( empty($errormsg))

{

$direction = $email_direction;

$email_subject = "GWU Food Truck Contact form submission: $name";

$email_body = "You have received a new message. ".

" Here are the details:\n Name: $name \n ".

"Email: $email_address\n Message \n $messageV";

$headers = "From: $email_direction\n";

$headers .= "Reply-To: $visitor_email";

mail($to,$email_subject,$email_body,$headers);

//redirect to the 'thank you' page

header('Location: Gwu-food-trucks/about');

}