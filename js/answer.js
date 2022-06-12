function toggleAnswer() {
  const cards = document.querySelectorAll("[data-js=card]");
  cards.forEach((card) => {
    const answerButton = card.querySelector("[data-js=answer-button]");
    const answer = card.querySelector("[data-js=answer]");
    answerButton.addEventListener("click", () => {
      answer.classList.toggle("hidden");
      if (answerButton.innerHTML == "Show answer") {
        answerButton.innerHTML = "Hide answer";
      } else {
        answerButton.innerHTML = "Show answer";
      }
    });
  });
}

export { toggleAnswer };
