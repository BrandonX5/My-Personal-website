<?php $currentUrl = $_SERVER['REQUEST_URI'];

// Define a function to update the page title
function updatePageTitle($title) {
echo "<title>$title</title>";
}

// Use a switch statement to set the page title based on the URL
switch ($currentUrl) {
case '/index.php':
updatePageTitle('Brandon Biernaczyk IT enthusiast');
break;
case '/homelabs.php':
updatePageTitle('Home labs');
break;
case '/page3':
updatePageTitle('Page 3');
break;
default:
updatePageTitle('My Website');
}
