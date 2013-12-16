<?php

	set_include_path(get_include_path() . PATH_SEPARATOR . '/var/www/clients/client1/web5/private/phpseclib');
	include('Net/SFTP.php');

	//output to file
    $filename = "LasVegas_Form_Submissions___DATE__.csv";
    $timestamp_file = "savedforftp/lastupload.txt";


	//DB COONECTION INFO Params
	$db_host = "localhost";
	$db_dbname = "c1vegasgpon";
	$db_user = "c1gpon";
	$db_pass = "8Jwn6e526322R8AFq4j41D7B78955WjI";

	//FTP CONNECTION
	$ftp_localfile = 'savedforftp/'.$filename;

	$ftp_remotefile = '/web/offers/gigabit/inc/testftpuploads/'.$filename;
	$ftp_server = "127.0.0.1";
	$ftp_port = 21;
	$ftp_username = "centurylink_staging_promotions";
	$ftp_password = "Pama7191!";
	$use_SFTP = false;

	$newtime = time();


	if ( $_GET["passkey"] == "1e3jM7Hpn4MAecUf3OM184ydVWb3zS47" ) {
		/*
			SINCE YOU'VE GOT THE PASSKEY, WE'RE GOING TO USE ACTUAL ACXIOM PRODUCTION FTP INFO. 
		*/

		$ftp_username = "zf7733";
		$ftp_remotefile = '/'. $ftp_username .'/incoming/'.$filename;
		$ftp_server = "dsftpi.acxiom.com";
		$ftp_port = 22;
		$ftp_password = '1QWEST!CTL!FTPPW';
		$use_SFTP = true;
	}


	function getDataFromDB ( $db_host, $db_user, $db_pass, $db_dbname, $timestamp_file ) {
		global $ftp_remotefile, $ftp_localfile;


		$tsfp = fopen($timestamp_file, 'r');
		if ( !filesize($timestamp_file) ) {
			echo "could not read timestamp file... exiting.";
			exit();
		}
		$str_timestamp = fread($tsfp, filesize($timestamp_file));
		fclose($tsfp);

		$outputtime = date("Y-m-d H:i:s", strtotime( $str_timestamp ) );
		echo $outputtime . "<br /><br />";

		//db-connect 
		$con = mysqli_connect($db_host,$db_user,$db_pass,$db_dbname);

		// Check connection
		if (mysqli_connect_errno($con)){
			echo "Failed to connect to MySQL: " . mysqli_connect_error();
			echo "<br><br>";
		} 

		//Get tabble contents based on day and time
		$sql = "SELECT * FROM CNTL_1GIG_VEGAS_INQUIRY WHERE submitTime > '$outputtime'";

		if($result = mysqli_query($con, $sql)){
			$num_fields = mysqli_num_fields($result);
		}			

		//create headers
		$headers = array();

	    $storefirsttime = null;
	    $storelasttime = null;

	    echo "Number of New Entries: ". $result->num_rows ."<br />\n";

	    if ( $result->num_rows > 0 ) {

		    if ( $result ){

		    	$dataarr = array();

		        while ($row = $result->fetch_row())
		        {
		        	if ( !$storefirsttime ) {
			            $storefirsttime = $row[1]; //Currently, date is 2nd column.		        		
		        	} else {
			            $storelasttime = $row[1]; //Currently, date is 2nd column.		        		
		        	}
		        	$dataarr[] = array( $row[6] );
		        }

			    $datefirsttime = strtotime( $storefirsttime );
			    $datelasttime = strtotime( $storelasttime );

			    $range = ( date("Y-m-d-H-i",$datefirsttime)."_".date("Y-m-d-H-i",$datelasttime) );

			    echo "Entry Date Range: ".$range."<br /><br />\n"; 

		        $ftp_localfile = str_replace("__DATE__", $range, $ftp_localfile );
		        $ftp_remotefile = str_replace("__DATE__", $range, $ftp_remotefile );

		    	$fp = fopen($ftp_localfile, 'w+');
		    	foreach ($dataarr as $key => $dropvalue) {
		            fputcsv($fp, $dropvalue, "\t");
		    	}
				fclose($fp);
			}
		}

		//CLOSE ALL DB CONNECTIONS
		mysqli_close($con);	

		return $storelasttime;
	}


	function uploadToFTP ( $ftp_server, $ftp_port, $ftp_username, $ftp_password, $SFTP ) {
		global $ftp_remotefile, $ftp_localfile;

		$isSuccess = false;

		if ( !$SFTP ) {
			//NOT USING SFTP, CONNECT WITH PLAIN OL FTP
			$conn_id = ftp_connect($ftp_server, $ftp_port);
			$login_result = ftp_login($conn_id, $ftp_username, $ftp_password);

			if ( !$conn_id ) {
				echo "Couldn't connect to $ftp_server";
				return  $isSuccess;
			}

			// upload a file	
			if ( !!$ftp_localfile && ftp_put($conn_id, $ftp_remotefile, $ftp_localfile, FTP_ASCII)) {
				echo "successfully uploaded <a href=\"/offers/gigabit/inc/$ftp_localfile\" target=\"_blank\"><strong>$ftp_localfile</strong></a>\n".'<br />';
				echo "remote ftp file is located uploaded <strong>$ftp_remotefile</strong>\n";
				$isSuccess = true;
			} else {
				echo "There was a problem while uploading $ftp_localfile\n";
			}

			// close the connection
			ftp_close($conn_id);


		} else {
			//USING SFTP, LETS GET FANCY
			$sftp = new Net_SFTP($ftp_server);
			if ( !$sftp->login( $ftp_username, $ftp_password) ) {
			    echo 'SFTP Login Failed';
				return $isSuccess;			
			} else {
				//$sftp->chdir('incoming');
				echo "Uploading file via SFTP <br />\n";
				$sftp->put( $ftp_remotefile, $ftp_localfile, NET_SFTP_LOCAL_FILE );
				echo $sftp->getSFTPLog();
				echo "File Uploaded. <br />\n";
				$isSuccess = true;
				return $isSuccess;
			}

		}

		return $isSuccess;
	}

	function writeDateOfLastFTPUpload ($storelasttime, $timestamp_file) {
		//Time of last manual upload to axciom: 2013-20-10 22:28:59
		if ( $_GET["passkey"] == "1e3jM7Hpn4MAecUf3OM184ydVWb3zS47" ) {
			$tsfp = fopen($timestamp_file, 'w+'); 
			fwrite($tsfp, $storelasttime);
			fclose($tsfp);
		}
	}


$storelasttime = getDataFromDB( $db_host, $db_user, $db_pass, $db_dbname, $timestamp_file );
if ( !!$storelasttime && 
    uploadToFTP( $ftp_server, $ftp_port, $ftp_username, $ftp_password, $use_SFTP ) ) {
	writeDateOfLastFTPUpload($storelasttime, $timestamp_file);
} else {
	echo "\n <br /> Note: Not writing file or FTPing.";
}

