const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: ' India is a federal union comprising twenty-nine states and how many union territories?',
    answers: [
      { text: '7', correct: true },
      { text: '8', correct: false }
    ]
  },
  {
    question: ' Which of the following is the capital of Arunachal Pradesh??',
    answers: [
      { text: 'itanagar', correct: true },
      { text: 'Shimla', correct: false },
      { text: 'Mumbai', correct: false },
      { text: 'Bangalore', correct: false }
    ]
  },
  {
      question: 'What are the major languages spoken in Andhra Pradesh?',
    answers: [
      { text: 'English and Telugu', correct: false },
      { text: 'Telugu and Urdu', correct: true },
      { text: 'Telugu and Kannada', correct: false },
      { text: 'All of the above languages', correct: false }
    ]
  },
  {
    question: 'What is the state flower of Haryana? ',
    answers: [
      { text: 'Lotus', correct: true },
      { text: ' Rhododendron', correct: false },
      { text: 'Golden Shower', correct: false },
      { text: 'Not declared', correct: false }
    ]
  },
  {
    question: 'Which of the following states is not located in the North?',
    answers: [
      { text: 'Jharkhand', correct: true },
      { text: 'Jammu and Kashmir', correct: false },
      { text: 'Himachal Pradesh', correct: false },
      { text: 'Haryana', correct: false }
    ]
  },
  {
    question: 'In which state is the main language Khasi?',
    answers: [
      { text: 'Mizoram', correct: false },
      { text: ' Nagaland', correct: false },
      { text: ' Meghalaya', correct: true },
      { text: 'Tripura', correct: false }
    ]
  },
  {
    question: ' Which state has the largest area?',
    answers: [
      { text: 'Maharashtra', correct: false },
      { text: 'Madhya Pradesh', correct: false },
      { text: 'Uttar Pradesh', correct: false },
      { text: 'Rajasthan', correct: true }
    ]
  },
  {
    question: 'Which state has the largest population?',
    answers: [
      { text: 'Uttar Pradesh', correct: true },
      { text: 'Maharastra', correct: false },
      { text: 'Bihar', correct: false },
      { text: 'Andra Pradesh', correct: false }
    ]
  },
  {
    question: ' In what state is the Elephant Falls located? ',
    answers: [
      { text: 'Mizoram', correct: false },
      { text: 'Orissa', correct: false },
      { text: 'Manipur', correct: false },
      { text: 'Meghalaya', correct: true }
    ]
  }
]