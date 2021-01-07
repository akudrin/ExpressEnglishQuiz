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

    myQuestions.forEach((currentQuestion, questionNumber) => {
      answerContainers[questionNumber]
        .querySelectorAll("label")
        .forEach((label) => {
          label.style.color = "black";
        });
    });

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
        // color the correct answer green
        answerContainers[questionNumber]
          .querySelectorAll("label")
          .forEach((label) => {
            if (label.querySelector("input").value === userAnswer) {
              label.style.color = "green";
            }
          });
      }
      // if answer is blank
      else if (userAnswer == undefined) {
        answerContainers[questionNumber].style.color = "black";
      }
      // if answer is wrong
      else {
        answerContainers[questionNumber]
          .querySelectorAll("label")
          .forEach((label) => {
            if (label.querySelector("input").value === userAnswer) {
              label.style.color = "red";
            }
          });
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `Answers correct: ${numCorrect} out of ${myQuestions.length}`;
  }

  function showAllAnswers() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    myQuestions.forEach((currentQuestion, questionNumber) => {
      //
      answerContainers[questionNumber]
        .querySelectorAll("label")
        .forEach((label) => {
          if (
            label.querySelector("input").value === currentQuestion.correctAnswer
          ) {
            label.querySelector("input").checked = "true";
            label.style.color = "green";
          }
        });
    });
  }

  //variables
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitQuizButton = document.getElementById("submitQuiz");
  const showAnswers = document.getElementById("showAnswers");
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
      question: "They .... in Tallinn.",
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
  submitQuizButton.addEventListener("click", showResults);
  showAnswers.addEventListener("click", showAllAnswers);
})();
