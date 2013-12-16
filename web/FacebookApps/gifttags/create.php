<?php
// PDF CREATE SCRIPT - TAKE 3

include_once("class.ezpdf.php");

$template_height = 600;
$template_width = 1200;
$margin_left = 13;
$padding_vert = 0;
$padding_hor = 10;
$margin_bottom = 37;

// parse inputs
$scale = (float) $_GET['scale'];
$xPos = (float) $_GET['x'] ;
$yPos = (float) $_GET['y'] ;
$rotation = -(float)$_GET['rotation'];
$guid = $_GET['guid'];
$template = $_GET['template'];

// uploaded file path / name
$u_file = './files/' . $guid;

// get file extension
$ext = strtolower(strrchr($guid,"."));

// get guid
$guid = substr($guid,0,strrpos($guid,"."));

if($ext == '.jpg' || $ext == '.jpeg')
{
	// get uploaded jpg
	$up_image = imagecreatefromjpeg($u_file);
}
else if ($ext == '.png')
{
	// get uploaded png
	$up_image = imagecreatefrompng($u_file);
}
else if ($ext == '.gif')
{
	// get uploaded gif
	$up_image = imagecreatefromgif($u_file);
}

// 0 - calculate scale factor performed on upload
list($l_width, $l_height) = getimagesize("./files/" . $guid . "-lo.jpg");
list($width, $height) = getimagesize($u_file);
$scale_factor = $l_width / $width;

// 1 - blow up uploaded file to 300 dpi * scale factor
$s_height =  $height * ($scale / 100) * (300/72) * $scale_factor;
$s_width = $width * ($scale / 100) * (300/72)  * $scale_factor;
$image_scaled = imagecreatetruecolor($s_width, $s_height);
imagecopyresized($image_scaled, $up_image, 0, 0, 0, 0, $s_width, $s_height, $width, $height);
imagedestroy($up_image);
$image_scaled_file = "./files/" . $guid . "_scaled.jpg";
imagejpeg($image_scaled,$image_scaled_file,100);

$im = imagecreatetruecolor(100, 100);
$white = imagecolorallocate($im, 255, 255, 255);
$green = imagecolorallocate($im, 0, 255, 36);

// 2 - rotate image
$image_rot = imagerotate($image_scaled,$rotation,$white);
imagedestroy($image_scaled);
$image_rot_file = "./files/" . $guid . "_rot.jpg";
imagejpeg($image_rot,$image_rot_file,100);
list($w_r, $h_r) = getimagesize($image_rot_file);

// 3 - crop @ template size
$xPos_scaled = $xPos * (300/72) * $scale_factor;
$yPos_scaled = $yPos * (300/72) * $scale_factor;
$image_crop = imagecreatetruecolor($template_width,$template_height);


//imagecopymerge($image_crop, $image_rot,0,0, round(-($xPos_scaled - ($w_r / 2))), round((-$yPos_scaled) + ($h_r / 2)), $template_width, $template_height,50	);
//imagefilledrectangle($image_crop, 0, 0, $template_width, $template_height, $white);

imagecopyresampled($image_crop, $image_rot, 0,0, round(-($xPos_scaled - ($w_r / 2))), round((-$yPos_scaled) + ($h_r / 2)), $template_width, $template_height,$template_width, $template_height);
imagefill($image_crop,0,0,$white);
imagefill($image_crop,0,$template_height-1,$white);
imagefill($image_crop,$template_width-1,0,$white);
imagefill($image_crop,$template_width-1,$template_height-1,$white);

//imagefilltoborder($image_crop,0,0,$green,$white);

imagedestroy($image_rot);
$image_crop_file = "./files/" . $guid . "_crop.jpg";
imagejpeg($image_crop, $image_crop_file, 100);

// 5 - overlay template
$template_image = imagecreatefrompng('./templates/template' . $template . '.png');
imagecopy($image_crop, $template_image, 0, 0, 0, 0, $template_width, $template_height);
imagedestroy($template_image);

// save the final image to a file
$file_final =  './files/' . $guid . '_final.jpg';

// delete files if they exist
if(file_exists($file_final))
{
	unlink($file_final);
}
imagejpeg($image_crop, $file_final,100);


imagedestroy($image_crop);

$pdf =& new Cezpdf(array(21.6,27.9));

for($i = 0; $i < 5; $i++)
{
	$pdf_y = $margin_bottom + ($i * 144) + ($i * $padding_vert);
	$pdf_x1 = $margin_left;
	$pdf_x2 = $pdf_x1 + 288 + $padding_hor;

	$pdf->addJpegFromFile($file_final,$pdf_x1,$pdf_y,288,144);
	$pdf->addJpegFromFile($file_final,$pdf_x2,$pdf_y,288,144);
}

$pdfcode = $pdf->ezOutput();

$pdfFileName = './pdf/' . $guid . '.pdf';
if( file_exists($pdfFileName))
{
	unlink($pdfFileName);
}

$fp=fopen( $pdfFileName, 'wb' );

/* TESTING */
//echo "filename: " . $pdfFileName . "<br />";

$fst = fwrite($fp,$pdfcode);
//echo 'File Status: ' . $fst . "<br /><br />";

fclose($fp);

print 'pdf/' . $guid . ".pdf";


?>
