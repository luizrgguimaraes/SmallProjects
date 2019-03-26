<?php

$filedebug=fopen("log/debug.log","w");


$fileErro=fopen("log/erro.log","a");
function debug($str){
    global $filedebug;fwrite($filedebug,$str."\n"); 
}

function debugSESSIONS(){

    $fileSessions=fopen("log/sessions.log","w");
    fwrite($fileSessions,print_r($_SESSION,true));
    
}

function erro($str){
    global $fileErro;fwrite($fileErro,$str."\n"); 
}


function limparPost($limparPost){
    if(!$limparPost)return;
    if($_SERVER['REQUEST_METHOD']=='GET'){
        header('Location: http://'.$_SERVER['SERVER_NAME'].'/SalesPerson');
    }
}

function getPropColor($prop){
    if(!isset($_SESSION['colorpropriedade']))return 0;
    if(!isset($_SESSION['colorpropriedade'][$prop]))return 0;
    return $_SESSION['colorpropriedade'][$prop]; 
}



?>