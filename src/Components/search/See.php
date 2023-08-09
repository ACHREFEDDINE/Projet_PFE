<?php
//Please create users database inside phpmysql admin and create userdetails tabel and create id, email and username fields
$servername = "http://41.231.54.51/server/advertiser";
$username   = "root";
$password   = "";
$dbname     = "";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
//Add user
if(isset($_POST['myEmail']))
{
    $sql = "INSERT INTO userdetails (email, username)
        VALUES ('".$_POST['myEmail']."', '".$_POST['myUsername']."')";
    if (mysqli_query($conn,$sql)) {
    $data = array("data" => "You Data added successfully");
        echo json_encode($data);
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
//Get single user details
elseif(isset($_POST['userid']))
{
    $trp = mysqli_query($conn, "SELECT * from userdetails where id =".$_POST['userid']);
    $rows = array();
    while($r = mysqli_fetch_assoc($trp)) {
        $rows[] = $r;
    }
    print json_encode($rows);
}
else
{
    //get all users details
    $trp = mysqli_query($conn, "SELECT * from userdetails");
    $rows = array();
    while($r = mysqli_fetch_assoc($trp)) {
        $rows[] = $r;
    }
    print json_encode($rows);
}
?>