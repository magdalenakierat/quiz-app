function questionCards() {
const cards = [
    {
      id: '1',
      isBookmarked: false,
      question: 'Question Number 1?',
      answer: 'Answer Number 1.',
      tags: ['tag-x', 'tag-y', 'tag-z']
    },
    {
      id: '2',
      isBookmarked: false,
      question: 'Question Number 2?',
      answer: 'Answer Number 2.',
      tags: ['tag-x', 'tag-y', 'tag-z']
    },
    {
      id: '3',
      isBookmarked: true,
      question: 'Question Number 3?',
      answer: 'Answer Number 3.',
      tags: ['tag-a', 'tag-b', 'tag-c']
    }
  ]

  const questions = document.querySelectorAll('[data-js=question]');

  questions.forEach((question) => {
      question.innerText = cards.question;
  });
}

  export { questionCards };