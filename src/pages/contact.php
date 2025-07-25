<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$phone = $_POST['phone'] ?? '';
$subject = $_POST['subject'] ?? '';
$message = $_POST['message'] ?? '';

if (!$phone || !$subject || !$message) {
    echo json_encode(['error' => 'Missing required fields']);
    exit();
}

// Supabase setup
$supabase_url = "https://xkawyuzkrrxgrcslxyjb.supabase.co"; 
$api_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrYXd5dXprcnJ4Z3Jjc2x4eWpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyODEwMjYsImV4cCI6MjA2ODg1NzAyNn0.RLld3ybTkf1ai9W3wyRF2E94uTp-_1Upe9Lo0uzRlYs";                
$table = "contacts";           

$data = array(
    "phone" => $phone,
    "subject" => $subject,
    "message" => $message
);

$options = array(
    'http' => array(
        'header'  => "Content-type: application/json\r\n" .
                     "apikey: $api_key\r\n" .
                     "Authorization: Bearer $api_key\r\n",
        'method'  => 'POST',
        'content' => json_encode($data)
    )
);

$context  = stream_context_create($options);
$result = file_get_contents("$supabase_url/rest/v1/$table", false, $context);

if ($result === FALSE) {
    echo json_encode(["error" => "Error saving to Supabase"]);
} else {
    // Optional: Google Sheet Forwarding
    $google_script_url = 'https://script.google.com/macros/s/AKfycbyRccRZQg4wlnBUTDq6vw9VpohU04-PKZiA4QIFUC-2mdplynFFf__G5X6-Dkr2_r48Og/exec';

    $google_options = array(
        'http' => array(
            'header'  => "Content-type: application/json\r\n",
            'method'  => 'POST',
            'content' => json_encode($data)
        )
    );
    $google_context = stream_context_create($google_options);
    $google_result = file_get_contents($google_script_url, false, $google_context);

    echo json_encode(["message" => "Saved to Supabase and Google Sheet!"]);
}
?>
