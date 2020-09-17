const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

function buildQuiz() {}

function showResults() {}

const myQuestions = [
  {
    question: "Jim .... every day.",
    answers: {
      a: "don't watch TV",
      b: "go to school",
      c: "reads a book",
      d: "don't go to school",
    },
    correctAnswer: "c",
  },
  {
    question: "Anna .... at the moment.",
    answers: {
      a: "read a book",
      b: "reads a book",
      c: "is reading a book",
      d: "has read a book",
    },
    correctAnswer: "c",
  },
  {
    question: "Mary .... already.",
    answers: {
      a: "read a book",
      b: "have done her homework",
      c: "has cleaned her room",
      d: "drive to the city",
    },
    correctAnswer: "c",
  },
  {
    question: "Mary .... already.",
    answers: {
      a: "read a book",
      b: "have done her homework",
      c: "has cleaned her room",
      d: "drive to the city",
    },
    correctAnswer: "c",
  },
];

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener("click", showResults);
