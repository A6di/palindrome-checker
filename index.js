const userInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

const checkPalindrome = (input) => {
  const originalInput = input;

  if (input === "") {
    alert("Please enter valid value");
    return;
  }

  resultDiv.replaceChildren();

  const reverseInput = input.toLowerCase();

  let resultMsg = `<strong>${originalInput}</strong> ${
    reverseInput === [...reverseInput].reverse().join("") ? "is" : "is not"
  } palindrome.`;

  const pTag = document.createElement("p");
  pTag.className = "user-input";
  pTag.innerHTML = resultMsg;
  resultDiv.appendChild(pTag);

  resultDiv.classList.remove("hidden");
};

checkBtn.addEventListener("click", () => {
  checkPalindrome(userInput.value);
  userInput.value = "";
});

checkBtn.addEventListener("keydown", (e) => {
  if (e === "enter") {
    checkPalindrome(userInput.value);
    userInput.value = "";
  }
});
