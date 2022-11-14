<?php

function elTiempo($ciudadId){
    $apiKey = "API KEY";
    $googleApiUrl = "https://api.openweathermap.org/data/2.5/weather?id=" . $ciudadId . "&lang=es&units=metric&APPID=" . $apiKey;
    
    $ch = curl_init();
    
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_URL, $googleApiUrl);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($ch, CURLOPT_VERBOSE, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

    $respuesta = curl_exec($ch);
    
    curl_close($ch);
    $data = json_decode($response);
    $currentTime = time();

    echo "<h2>".$data->name."</h2>"; 
    echo "<div class='time'>";
    echo "<div>".date("l g:i a", $currentTime)."</div>";
    echo "<div>".date("jS F, Y",$currentTime)."</div>";
    echo "<div>".ucwords($data->weather[0]->description)."</div>";
    echo "</div>";
    
    echo "<div class='weather-forecast'>";
    echo "<img src='https://openweathermap.org/img/w/".$data->weather[0]->icon." .png' >";
    echo "<div>".$data->main->temp_max."</div>";
    echo "<div>".$data->main->temp_min."</div>";
    echo "<div>".$data->main->humidity."</div>";
    echo "<div>".$data->wind->speed."</div>";
}