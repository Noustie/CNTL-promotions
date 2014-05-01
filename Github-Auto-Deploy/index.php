<?php 

$payload = $_REQUEST['payload'];
$logso = "\n";
if ( FALSE && !$payload ) {
	file_put_contents('logs/github.txt', "No Payload on Last hit." );
	exit(0);
}
if ( !!$payload ) {
	$payload = json_decode( $payload, TRUE );
	//log the request
	$logso .= "deployed at ".date('Y-m-d h:m:s') . ' -- with payload: ';
	$logso .= "\n". $payload['head_commit']['message'];
	$logso .= "\n". $payload['head_commit']['timestamp'];
}

$fetch = shell_exec('cd /var/www/clients/client1/web3/private && ./gitfetch.sh 2>&1');
$output = shell_exec('git log --name-status HEAD^..HEAD');

//echo "\n\n <br />".$fetch."\n\n <br />";

$logso .= "\n" . $output;
file_put_contents('logs/github.txt', print_r($logso, TRUE) );

print_r($logso);