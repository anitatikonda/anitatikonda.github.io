<?php
// File to store the visitor count
$file = 'visitor_count.txt';

// Check if the file exists
if (file_exists($file)) {
    // Read the current count
    $count = intval(file_get_contents($file));

    // Increment the count
    $count++;

    // Write the new count to the file
    file_put_contents($file, $count);
} else {
    // Create the file with initial count
    $count = 1;
    file_put_contents($file, $count);
}

// Display the count
echo $count;
?>
