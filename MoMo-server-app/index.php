<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

$f = './request.txt';

if( $_SERVER['REQUEST_METHOD'] == 'POST' ){
	$json = json_decode(file_get_contents('php://input'));
	file_put_contents( $f, json_encode( array( 'ip' => $json->ip )));
	echo json_encode(array('ok' => 1));
}

else /* if( "request from same local network" ) */{
	$ip = file_get_contents( $f );
	echo json_encode( $ip );
}
