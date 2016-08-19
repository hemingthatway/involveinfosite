<?php
    if(isset($_POST['email'])) {
        $data = $_POST['email'] . ";";
        $ret = file_put_contents('emails.txt', $data, FILE_APPEND | LOCK_EX);
        if($ret === false) {
            die('There was an error writing this file');
        }
        else {
            echo "<p>Dzięki, powiadomimy Cię od razu jak coś będzie się działo!</p>";
        }
    }
    else {
        die('no post data to process');
    }
?>
