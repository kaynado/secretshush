script.js
// script.js

// ===== CROSSWORD LOGIC =====
function checkCrossword() {
    const answers = {
        word1: "halloween",
        word2: "natick",
        word3: "texas",
        word4: "monday"
    };

    for (let key in answers) {
        const value = document.getElementById(key).value.trim().toLowerCase();
        if (value !== answers[key]) {
            document.getElementById("error").innerText =
                "Try that again.. ";
            return;
        }
    }

    // If all answers are correct
    document.getElementById("minigame").style.display = "none";
    document.getElementById("container").classList.remove("hidden");
    document.getElementById("container").classList.add("visible");
    displayKay();
}

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash shades of green
        flashGreenColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayKayDance(); // Display the cat-heart.gif
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'please?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash shades of green and then execute a callback function
function flashGreenColors(callback) {
    var colors = ['#5c6b1a', '#374e16','#343f15','#0f2411','#102c15'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 100 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the cat.gif initially
function displayKay() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var kayImage = new Image();
    // Set the source (file path) for the cat image
    kayImage.src = 'pleebs.gif'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    kayImage.alt = 'Kay';
    // When the cat image is fully loaded, add it to the image container
    kayImage.onload = function() {
        imageContainer.appendChild(kayImage);
    };
}

// Function to display the kaydance.gif
function displayKayDance() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the gif
    var kayDanceImage = new Image();
    // Set the source (file path) for the gif
    kayDanceImage.src = 'kaydance.gif'; // source name for gif
    // Set alternative text for the image (for accessibility)
    kayDanceImage.alt = 'Kay Dance';
    // When the kaydance image is fully loaded, add it to the image container
    kayDanceImage.onload = function() {
        imageContainer.appendChild(kayDanceImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
        var link = document.createElement('a');
        link.href = "https://youtu.be/jq5me8JCPZY?si=e2jkM9AXhudBacrP";  
        link.innerText = "Totally not suspicious";
        link.style.display = "block";
        link.style.marginTop = "20px";
        link.style.fontSize = "24px";
        link.style.color = "red";
        link.style.fontFamily = "'Goudy Old Style'";

        imageContainer.appendChild(link);

    };
}
