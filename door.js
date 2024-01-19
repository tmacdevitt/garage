// Create an array to represent color boxes
const colorBoxes = Array(10).fill('green');

// Initialize TravelDirection to "down" and InMotion to "False"
let TravelDirection = "down";
let InMotion = false;

// Function to toggle the colors of the boxes from top to bottom when turning green
function toggleGreen() {
    let currentIndex = 0;

    function toggleColor() {
        if (currentIndex < colorBoxes.length) {
            const currentColor = colorBoxes[currentIndex];

            if (currentColor === 'black') {
                colorBoxes[currentIndex] = 'green';
                console.log(`Toggled Box ${currentIndex + 1} to Green`);
            }

            currentIndex++;
            if (currentIndex < colorBoxes.length) {
                setTimeout(toggleColor, 350); // Change the delay to 350 milliseconds
            } else {
                // When the animation completes, set InMotion to "False"
                InMotion = false;
                console.log("InMotion set to False");
                if (TravelDirection === "goingUp") {
                    // Set TravelDirection to "goingDown" when going up
                    TravelDirection = "goingDown";
                    console.log("TravelDirection changed to goingDown");
                }
            }
        }
    }

    toggleColor();
}

// Function to toggle the colors of the boxes from bottom to top when turning black
function toggleBlack() {
    let currentIndex = colorBoxes.length - 1;

    function toggleColor() {
        if (currentIndex >= 0) {
            const currentColor = colorBoxes[currentIndex];

            if (currentColor === 'green') {
                colorBoxes[currentIndex] = 'black';
                console.log(`Toggled Box ${currentIndex + 1} to Black`);
            }

            currentIndex--;
            if (currentIndex >= 0) {
                setTimeout(toggleColor, 350); // Change the delay to 350 milliseconds
            } else {
                // When the animation completes, set InMotion to "False"
                InMotion = false;
                console.log("InMotion set to False");
                if (TravelDirection === "goingDown") {
                    // Set TravelDirection to "goingUp" when going down
                    TravelDirection = "goingUp";
                    console.log("TravelDirection changed to goingUp");
                }
            }
        }
    }

    toggleColor();
}

// Simulate button click
function simulateButtonClick() {
    if (!InMotion) { // Check if the animation is not in progress
        const firstBoxColor = colorBoxes[0];
        if (firstBoxColor === 'green') {
            // Toggle from green to black (bottom to top)
            toggleBlack();
            console.log("Toggled from Green to Black (bottom to top)");
            TravelDirection = "goingUp"; // Change TravelDirection to "goingUp"
            InMotion = true;
            console.log(`TravelDirection changed to ${TravelDirection}`);
            console.log(`InMotion set to ${InMotion}`);
        } else {
            // Toggle from black to green (top to bottom)
            toggleGreen();
            console.log("Toggled from Black to Green (top to bottom)");
            if (TravelDirection === "goingDown") {
                // Set InMotion to "True" and TravelDirection to "goingDown" when the first box toggles colors
                InMotion = true;
                TravelDirection = "goingDown";
                console.log(`TravelDirection changed to ${TravelDirection}`);
                console.log(`InMotion set to ${InMotion}`);
            }
        }
    }
}

// Simulate button click
simulateButtonClick();
