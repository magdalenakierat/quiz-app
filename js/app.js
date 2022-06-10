// let button = document.querySelector("[data-js=button1]");
// button.addEventListener("click", () =>
//   document.querySelector("[data-js=answer1]").classList.toggle("hidden")
// );

function toggleAnswer(button_name, answer_name) {
  const buttonIdentifier = "[data-js=" + button_name + "]";
  const clickButton = document.querySelector(buttonIdentifier);
  const answerIdentifier = "[data-js=" + answer_name + "]";
  const answerElement = document.querySelector(answerIdentifier);
  clickButton.addEventListener("click", () =>
    answerElement.classList.toggle("hidden")
  );
}

toggleAnswer("button1", "answer1");
toggleAnswer("button2", "answer2");
toggleAnswer("button3", "answer3");
