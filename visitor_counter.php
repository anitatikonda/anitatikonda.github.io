<?php
    $file = 'visitor_count.txt';

    // Check if the file exists
    if (file_exists($file)) {
        // Read the current count
        $count = file_get_contents($file);

        // Increment the count
        $count++;

        // Write the updated count back to the file
        file_put_contents($file, $count);

        // Display the count
        echo $count;
    } else {
        echo 'Unable to read the visitor count.';
    }
?>