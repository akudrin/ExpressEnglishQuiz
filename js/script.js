(function () {
  //functions
  function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "green";
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `Answers correct: ${numCorrect} out of ${myQuestions.length}`;
  }

  //variables
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
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
      question: "They .... live in Tallinn.",
      answers: {
        a: "lives",
        b: "is living",
        c: "live",
        d: "doesn't live",
      },
      correctAnswer: "c",
    },
    {
      question: "We feel tired because we .... all day.",
      answers: {
        a: "walked",
        b: "walk",
        c: "have been walking",
        d: "are walking",
      },
      correctAnswer: "c",
    },
  ];

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
