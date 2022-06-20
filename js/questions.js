function questionCards() {
  const cards = [
    {
      id: '1',
      isBookmarked: false,
      question: 'Is this question number 1?',
      answer: 'This is answer number 1.',
      tags: ['tag-x', 'tag-y', 'tag-z'],
    },
    {
      id: '2',
      isBookmarked: false,
      question: 'Is this question number 2?',
      answer: 'This is answer number 2.',
      tags: ['tag-x', 'tag-y', 'tag-z'],
    },
    {
      id: '3',
      isBookmarked: true,
      question: 'Is this question number 3?',
      answer: 'This is answer number 3.',
      tags: ['tag-a', 'tag-b', 'tag-c'],
    },
  ];

  cards.forEach((card, index) => {
    const questionElement = document.querySelector(
      '[data-js="question"][data-id="' + `${index + 1}` + '"]'
    );
    questionElement.innerText = cards[index].question;
    const answerElement = document.querySelector(
      '[data-js="answer"][data-id="' + `${index + 1}` + '"]'
    );
    answerElement.innerText = cards[index].answer;
    console.log(questionElement);
  });
}

export { questionCards };
