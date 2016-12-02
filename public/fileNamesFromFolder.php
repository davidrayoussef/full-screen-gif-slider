<?php 
  
  // grab only gif files from folder
  function FilesFromFolder($folder='', $extensions='gif') {

    $folder = ($folder == '') ? './' : $folder;

    // check directory
    if (!is_dir($folder)) { die('Invalid folder.'); }

    // create files array
    $files = array();

    // open directory
    if ($dir = @opendir($folder)) {

      // iterate through files
      while($file = readdir($dir)) {

        if (!preg_match('/^\.+$/', $file) and 
          preg_match('/\.('.$extensions.')$/', $file)) {

          // fill array
          $files[] = $file;                
        }            
      }

      // close directory
      closedir($dir);    
    }
    else {
      die('Could not open "'.$folder.'"');
    }

    if (count($files) == 0) {
      die('No files where found.');
    }

    // shuffle array
    shuffle($files);

    // return array
    return $files;
  }

  echo json_encode(FilesFromFolder("gifs"));

?>
