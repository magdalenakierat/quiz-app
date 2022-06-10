// function toggleAnswer(button_name, answer_name) {
//   const buttonIdentifier = "[data-js=" + button_name + "]";
//   const clickButton = document.querySelector(buttonIdentifier);
//   const answerIdentifier = "[data-js=" + answer_name + "]";
//   const answerElement = document.querySelector(answerIdentifier);
//   clickButton.addEventListener("click", () =>
//     answerElement.classList.toggle("hidden")
//   );
// }

// toggleAnswer("button1", "answer1");
// toggleAnswer("button2", "answer2");
// toggleAnswer("button3", "answer3");

// export { toggleAnswer };

function toggleAnswer() {
  const cards = document.querySelectorAll("[data-js=card]");
  cards.forEach((card) => {
    const answerButton = card.querySelector("[data-js=answer-button]");
    const answer = card.querySelector("[data-js=answer]");
    answerButton.addEventListener("click", () => {
      answer.classList.toggle("hidden");
    });
  });
}

export { toggleAnswer };
