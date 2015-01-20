<?php
	/*$user = json_decode(file_get_contents('php://input')); // get user from json headers
	if($user->email == "admin@gmail.com" && $user->password == "123456")
		echo "success";
	else
		echo "error";*/

	$servername = "localhost";
	$username = "root";
	$password = "password";
	$dbname = "cueapp";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} 

     $user = json_decode(file_get_contents('php://input')); // get user from json headers
     $userEmail = $user->email;
     $userPassword = $user->password;

	$sql = "SELECT firstname, useremail, password FROM login WHERE useremail = '".$user->email."' AND password='".$user->password."'";
	$result = $conn->query($sql);

	if ($result->num_rows > 0) 
	{
	 	//echo "success"   ;
	 	

	    // output data of each row
	    while($row = $result->fetch_assoc()) 
	    {
	        //echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
	        $arrResponse = array('responseval' => "success",'useremail' => $row["useremail"], 'firstname' => $row["firstname"]);
	    }

	} else 
	{

	    $arrResponse = array('responseval' => "error");
	}

	echo json_encode($arrResponse);

	$conn->close();



?>