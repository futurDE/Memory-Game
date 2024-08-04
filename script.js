// Select DOM elements
const startButton = document.querySelector(".start-button");
const fakeStartButton = document.querySelector(".fake-start");
const hiddenImageItem = document.querySelectorAll(".hidden-image-item");
const displayScore = document.querySelector(".score");
const displayHighScore = document.querySelector(".high-score");

// Initialize an empty array to store random numbers
let selectedRandomNumbers = [];
let userSelectedNumbers = [];

let selectionAllowed = false; //Boolean to allow the user to select images only after the computer's images have been displayed
// let start = false;
let score = 0;
let highScore = 0;


displayScore.textContent = `Score: ${score}`;
displayHighScore.textContent = `High Score: ${highScore}`;

startButton.addEventListener("click", () => {
    displayRandomImages();
    startButton.style.display = "none";
    fakeStartButton.style.display = "block";
});

function compareHighScoreAndScore() {
    if (score > highScore) {
        highScore = score;
    }

    displayHighScore.textContent = `High Score: ${highScore}`;
}

// displayRandomImages();

function clearVisibleImages() {
    hiddenImageItem.forEach((hiddenImage) => {
        // Remove the class "image-visible" and add "hide-image" if needed
        if (!hiddenImage.classList.contains("hide-image") || hiddenImage.classList.contains("image-visible")) {
           hiddenImage.classList.remove("image-visible");
           hiddenImage.classList.add("hide-image");
        }
    });
}

// Function to display a random image
function displayRandomImages() {
    setTimeout(() => {
        clearVisibleImages();
    }, 100);
    selectionAllowed = false;
    console.log(`This is selectionAllowed at the beginning of displayRandomImages(): ${selectionAllowed}`);
    selectedRandomNumbers = [];
    userSelectedNumbers = [];
    // Generate a random number between 0 and 8
    let randomNumber = Math.floor(Math.random() * 9);
    while (selectedRandomNumbers.length < 3) {
        randomNumber = Math.floor(Math.random() * 9);
        if (!selectedRandomNumbers.includes(randomNumber)) {
            selectedRandomNumbers.push(randomNumber);
        }
    }

    let firstPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            hiddenImageItem.forEach((hiddenImage) => {
                if (hiddenImage.classList.contains(`${selectedRandomNumbers[0]}`)) {
                    resolve(hiddenImage.classList.add("image-visible"));
                }
            });
        }, 500);
    });
    
    firstPromise
        .then((result) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    hiddenImageItem.forEach((hiddenImage) => {
                        if (hiddenImage.classList.contains(`${selectedRandomNumbers[1]}`)) {
                            resolve(hiddenImage.classList.add("image-visible"));
                        }
                    });
                }, 500);
            });
        })
        .then((result) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    hiddenImageItem.forEach((hiddenImage) => {
                        if (hiddenImage.classList.contains(`${selectedRandomNumbers[2]}`)) {
                            resolve(hiddenImage.classList.add("image-visible"));
                        }
                    });
                }, 500);
            });
        })
        .then((result) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(hiddenImageItem.forEach((hiddenImage) => {
                        // Add the class "image-visible" and remove "hide-image" if it's not already added
                        if (!hiddenImage.classList.contains("image-visible")) {
                            hiddenImage.classList.add("image-visible");
                            hiddenImage.classList.remove("hide-image");
                        }
                    }));
                }, 500);
            });
        })
        .then((result) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                     resolve(hiddenImageItem.forEach((hiddenImage) => {
                         // Remove the class "image-visible" and add "hide-image" if needed
                         if (!hiddenImage.classList.contains("hide-image") || hiddenImage.classList.contains("image-visible")) {
                            hiddenImage.classList.remove("image-visible");
                            hiddenImage.classList.add("hide-image");
                         }
                     }));
                }, 500); 
             });
        })
        .then((result) => {
            return new Promise((resolve, reject) => {
                resolve(
                    selectionAllowed = true
                );
            });
        });
}

//Code for selecting the user's image
function initializeUserSelection() {
    hiddenImageItem.forEach((hiddenImage, index) => {
        hiddenImage.addEventListener("click", (event) => {
            if (selectionAllowed) {
                console.log(`This is the index of the event that was clicked: ${index}`);
                hiddenImage.classList.add("image-visible");
                userSelectedNumbers.push(index);
                verifyMatch(userSelectedNumbers);
                console.log(`This is selectionAllowed from userSelectsImage: ${selectionAllowed}`);
            }
        });
    });
}

initializeUserSelection();

function verifyMatch(array) {
    if (array.length != selectedRandomNumbers.length) {
        console.log("Not equal to 3");
    } else if (array.length == 3) {
        let spread1 = `${selectedRandomNumbers[0]}${selectedRandomNumbers[2]}`;
        let spread2 = `${userSelectedNumbers[0]}${userSelectedNumbers[2]}`;

        if (spread1 == spread2) {
            score++;
            displayScore.textContent = `Score: ${score}`;
            compareHighScoreAndScore();
            setTimeout(() => {
                hiddenImageItem.forEach((hiddenImage) => {
                    // Remove the class "image-visible" and add "hide-image" if needed
                    if (!hiddenImage.classList.contains("hide-image") || hiddenImage.classList.contains("image-visible")) {
                        hiddenImage.classList.remove("image-visible");
                        hiddenImage.classList.add("hide-image");
                    }
                });
            }, 100);
            
            displayRandomImages();
        } else {
            score = 0;
            displayScore.textContent = `Score: ${score}`;
            compareHighScoreAndScore();
            startButton.style.display = "block";
            fakeStartButton.style.display = "none";
        }
    }
}