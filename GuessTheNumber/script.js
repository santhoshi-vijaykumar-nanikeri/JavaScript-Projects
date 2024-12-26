const guessInput = document.querySelector("#guessInput");
const guessButton = document.querySelector("#guessButton");
const message = document.querySelector("#message");

const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

guessButton.addEventListener("click", () => {
  const userGuess = parseInt(guessInput.value);
  attempts++;
  if (isNaN(userGuess)) {
    message.textContent = "Please Enter a Valid Number";
    message.style.color = "red";
  } else if (userGuess < randomNumber) {
    message.textContent = "Too Low! Try again.";
    message.style.color = "blue";
  } else if (userGuess > randomNumber) {
    message.textContent = "Too High! Try again.";
    message.style.color = "blue";
  } else {
    message.textContent = `Congratulations! You guessed the right number in ${attempts} attempts.`;
    message.style.color = "green";
  }
  guessInput.value = "";
  guessInput.focus();
});
