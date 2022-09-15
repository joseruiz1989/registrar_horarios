<?php

$Path = dirname( __FILE__ ) . "/";
$targetPath = dirname($Path, 1) . "/includes/";

// get the "function name" parameter from URL
$function_name1 = $_REQUEST["fun"];


// here start the functions
$function_name = substr($function_name1, 0, 10);

if ($function_name == "setproject") {
	$csv_target_path = $targetPath . 'times.csv';
	$csv_file = fopen($csv_target_path, "r") or die("Unable to open file!");

	fseek($csv_file, 0, SEEK_END); 		//fseek($csv_file, -1, SEEK_END); 
	$pos = ftell($csv_file);
	$LastLine = "";
	// Loop backword util "\n" is found.
	while((($C = fgetc($csv_file)) != "\n") && ($pos > 0)) {
	    $LastLine = $C.$LastLine;
	    fseek($csv_file, $pos--);
	}
	fclose($csv_file);
	// $actived_project = explode(",", $LastLine);
	// echo $function_name === "" ? "no suggestion" : $actived_project[0];
	echo $function_name === "" ? "no suggestion" : $LastLine;
}


if ($function_name == "write_hour") {
	$actual_time_start1 = $_REQUEST["time"];
	$project = $_REQUEST["project"];
	$task_bar_text = $_REQUEST["text"];
	$actual_project = $_REQUEST["actual"];

	



	$csv_target_path = $targetPath . 'times.csv';
	$csv_file = fopen($csv_target_path, "r") or die("Unable to open file!");

	fseek($csv_file, 0, SEEK_END); 		//fseek($csv_file, -1, SEEK_END); 
	$pos = ftell($csv_file);
	$LastLine = "";
	// Loop backword util "\n" is found.
	while((($C = fgetc($csv_file)) != "\n") && ($pos > 0)) {
	    $LastLine = $C.$LastLine;
	    fseek($csv_file, $pos--);
	}
	fclose($csv_file);
	$actived_project = explode(",", $LastLine);
	$actual_time_start = $actived_project[2];




	// $actual_time_start1 = substr($function_name1, 10, 10);
	// $project = substr($function_name1, 20);

	$start_time = strtotime("-5 hours");		// casa
	// $start_time = strtotime("-4 hours");		// ica
	
	$ye = gmdate("Y", $start_time);
	$mo = gmdate("n", $start_time);
	$da = gmdate("j", $start_time);
	$ho = gmdate("H", $start_time);
	$mi = gmdate("i", $start_time);
	$se = gmdate("s", $start_time);
	$se_next = gmdate("s", $start_time +0);
	$start_time_next = $start_time + 0;

	$start_time_str = "," . $ye . "," . $mo . "," . $da . "," . $ho . "," . $mi . "," . $se;
	$start_time_str_next = "," . $ye . "," . $mo . "," . $da . "," . $ho . "," . $mi . "," . $se_next;

	
	$total_time = $start_time - $actual_time_start;

	$days = gmdate("j", $total_time) - 1;
	$hours = gmdate("H", $total_time);
	$minutes = gmdate("i", $total_time);
	$seconds = gmdate("s", $total_time);
	$total_time_str = "," . $days . "," . $hours . "," . $minutes . "," . $seconds;
	if ($actual_project == "nada"){
		$task_bar_text = "nada";
	}
	if ($actual_project == "lanche" and $task_bar_text == ""){
		$task_bar_text = "lanche";
	}
    if ($actual_project == "comer" and $task_bar_text == ""){
		$task_bar_text = "comer";
	}



	$csv_target_path = $targetPath . 'times.csv';
	$csv_file = fopen($csv_target_path, "a+") or die("Unable to open file!");
	$data = ",x," . $start_time . $start_time_str . ",x," . $total_time . $total_time_str . ',' . $task_bar_text .
	"\n" . $project . ",x," . $start_time_next . $start_time_str_next;
	
	$string_encoded = iconv( mb_detect_encoding( $data ), 'Windows-1252//TRANSLIT', $data );
	fwrite($csv_file, $string_encoded);
	// fwrite($csv_file, ",x," . $start_time . $start_time_str . ",x,");

	fclose($csv_file);
	sleep(1);

	$csv_target_path = $targetPath . 'times_s_copy.csv';
	$csv_file = fopen($csv_target_path, "a+") or die("Unable to open file!");
	$data = ",x," . $start_time . $start_time_str . ",x," . $total_time . $total_time_str . ',' . $task_bar_text .
	"\n" . $project . ",x," . $start_time_next . $start_time_str_next;

	fwrite($csv_file, $data);
	// fwrite($csv_file, ",x," . $start_time . $start_time_str . ",x,");

	fclose($csv_file);
	sleep(1);








	



	
	echo $function_name === "" ? "no suggestion" : $actual_time_start . " - " . $project;






}




if ($function_name1 == "read_all") {
	$csv_target_path = $targetPath . 'times.csv';

	$handle = fopen ($csv_target_path,"r");
	while ($data = fgetcsv ($handle, 1000, ";")) {
        $data = array_map("utf8_encode", $data); //added
        $num = count ($data);
        // echo $data;
        for ($c=0; $c < $num; $c++) {
            // output data
            echo "$data[$c]\n";
        }
	}
	fclose($handle);


}