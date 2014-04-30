<?php
$oldest = time() - (60*60*12);

$guid = $_GET['guid'];
$filename = './pdf/' . $guid . '.pdf';
if( file_exists($filename))
{
	unlink($filename);
}



// get handle to directories to clean
$dir_files = opendir("./files/");
$dir_pdf = opendir("./pdf/");

while (false !== ($file = readdir($dir_files))) {
	//echo filemtime("./files/" . $file);
	if(filemtime("./files/" . $file) < $oldest && $file != "..")
	{		
		unlink( "./files/" . $file);
	}
}

while (false !== ($file = readdir($dir_pdf))) {
	//echo filemtime("./files/" . $file);
	if(filemtime("./pdf/" . $file) < $oldest && $file != "..")
	{
		unlink( "./pdf/" . $file);
	}
}

print "all clean!";

?>