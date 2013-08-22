<?php
/*
//create the directory if doesn't exists (should have write permissons)
if(!is_dir("./files")) mkdir("./files", 0755); 
//move the uploaded file
move_uploaded_file($_FILES['Filedata']['tmp_name'], "./files/".$_FILES['Filedata']['name']);
chmod("./files/".$_FILES['Filedata']['name'], 0777);
*/
?>

<?php
ini_set("memory_limit","300M");
// get file extension
$ext = strtolower(strrchr($_FILES['Filedata']['name'],"."));

// construct file name
$file = "./files/" .$_POST['guid'] . $ext;
$file_lo = "./files/" . $_POST['guid'] . "-lo.jpg";

// create the directory if doesn't exists (should have write permissons)
if(!is_dir("./files")) mkdir("./files", 0755);

// delete files if they exist
if(file_exists($file))
{
	unlink($file);
}
if(file_exists($file_lo))
{
	unlink($file_lo);
}

// move the uploaded file
move_uploaded_file($_FILES['Filedata']['tmp_name'], $file);

// resize file to max of 1200 x 1200
if($ext == '.jpg' || $ext == '.jpeg')
{
	// get uploaded jpg
	$up_image = imagecreatefromjpeg($file);
}
else if ($ext == '.png')
{
	// get uploaded png
	$up_image = imagecreatefrompng($file);
}
else if ($ext == '.gif')
{
	// get uploaded gif
	$up_image = imagecreatefromgif($file);
}

// get dimensions of uploaded file
list($width, $height) = getimagesize($file);

if($width >= $height && $width > 1200)
{
	// resize picture so width is 1200
	$new_width = 1200;
	$new_height = $height * (1200 / $width);
}
else if($height > 1200)
{
	// resize pic so height is 1200
	$new_height = 1200;
	$new_width = $width * (1200 / $height);
}
else
{
	$new_width = $width;
	$new_height = $height;
}

// create new  file
$new_image = imagecreatetruecolor($new_width, $new_height);
imagecopyresized($new_image, $up_image, 0, 0, 0, 0, $new_width, $new_height, $width, $height);
imagejpeg($new_image, $file_lo, 50);

if(filesize($file) > 200000)
{
	if($ext == '.jpg' || $ext == '.jpeg')
	{
		// get uploaded jpg
		imagejpeg($new_image, $file, 80);
	}
	else if ($ext == '.png')
	{
		// get uploaded png
		imagepng($new_image, $file, 2);
	}
	else if ($ext == '.gif')
	{
		// get uploaded gif
		imagegif($new_image, $file, 80);
	}
}
else
{
	if($ext == '.jpg' || $ext == '.jpeg')
	{
		// get uploaded jpg
		imagejpeg($new_image, $file, 100);
	}
	else if ($ext == '.png')
	{
		// get uploaded png
		imagepng($new_image, $file, 2);
	}
	else if ($ext == '.gif')
	{
		// get uploaded gif
		imagegif($new_image, $file, 100);
	}
}

// set permissions on file
chmod($file, 0777);
chmod($file_lo, 0777);

?>