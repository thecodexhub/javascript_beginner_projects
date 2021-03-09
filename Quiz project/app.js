const quizData = [
  {
    question: "What is a group of owls called?",
    a: "an Army",
    b: "a Bewilderment",
    c: "a Parliament",
    d: "a Surprise",
    correct: "c",
  },
  {
    question: "Do blue whales have teeth?",
    a: "Yes",
    b: "No",
    c: "Some have teeth",
    d: "None of these",
    correct: "b",
  },
  {
    question: "Is a sea cucumber an animal or a plant?",
    a: "Animal",
    b: "Plant",
    c: "Both",
    d: "None of these",
    correct: "a",
  },
  {
    question: "How many arms (mistakenly called tentacles) do octopuses have?",
    a: "8",
    b: "10",
    c: "12",
    d: "20",
    correct: "a",
  },
  {
    question: "What's the longest a lobster can live?",
    a: "Less than  5 years",
    b: "30 to 50 years",
    c: "50 to 100 years",
    d: "More than 100 years",
    correct: "d",
  },
  {
    question: "Which of these animals uses echolocation to navigate?",
    a: "Dolphins",
    b: "Mice",
    c: "Pigs",
    d: "Naked mole rats",
    correct: "a",
  },
  {
    question: "Are there polar bears in the wild in the Southern Hemisphere?",
    a: "Yes",
    b: "No",
    c: "Very rare",
    d: "None of these",
    correct: "b",
  },
  {
    question: "What can a Jesus Christ lizard do?",
    a: "Appear to come back from dead",
    b: "Cause hallucinations if you lick it",
    c: "Fly",
    d: "Walk on water",
    correct: "d",
  },
  {
    question:
      "In what country would you find the world's northernmost wild monkey population?",
    a: "India",
    b: "Japan",
    c: "Spain",
    d: "Unites States",
    correct: "b",
  },
  {
    question: "Which of the following is NOT a type of antelope?",
    a: "Impala",
    b: "Gazelle",
    c: "Marten",
    d: "Springbok",
    correct: "c",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const quiz_question = document.getElementById("quiz_question");

const answers = document.querySelectorAll(".quiz-answer");

const a_option = document.getElementById("a_option");
const b_option = document.getElementById("b_option");
const c_option = document.getElementById("c_option");
const d_option = document.getElementById("d_option");

const submit_btn = document.getElementById("submit-btn");

const quiz_container = document.getElementById("quiz-container");

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuestionIndex];

  quiz_question.innerText = currentQuizData.question;
  a_option.innerText = currentQuizData.a;
  b_option.innerText = currentQuizData.b;
  c_option.innerText = currentQuizData.c;
  d_option.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answers.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answers.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submit_btn.addEventListener("click", function () {
  let answerId = getSelected();
  currentQuestionIndex++;

  if (answerId && currentQuestionIndex < quizData.length) {
    if (answerId === quizData[currentQuestionIndex].correct) {
      score++;
    }
    loadQuiz();
  } else if (!answerId && currentQuestionIndex < quizData.length) {
    alert("Please select an option!");
  } else {
    quiz_container.innerHTML = `<h2 class="quiz-question" id="quiz_question">Yayy! You have scored ${score} marks out of ${quizData.length}</h2>`;
    // alert(`You have finished the quizzz. thanks!!! \nYour score is: ${score}`);
  }
});
