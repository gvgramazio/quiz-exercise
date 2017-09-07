interface AnswerProps {
  onClick: () => void
  text: string
}

interface IconProps {
  classes?: string
  pathClasses?: string
}

interface QuestionDataRaw {
  answer: number
  choices: string[]
  question: string
}

interface QuestionData {
  answerIndex: number
  choices: string[]
  question: string
}

interface QuestionProps {
  onSelect: (answer: number) => void
  questionData: QuestionData
  selectedChoiceIndex: number
}

interface QuizState {
  currentQuestionIndex: number
  questionsData: QuestionData[]
  selectedChoiceIndeces: number[]
  status: number
}

interface ResultsProps {
  onReset: () => void
  questionsData: QuestionData[]
  selectedChoiceIndeces: number[]
  status: number
}

interface WelcomeProps {
  onReady: () => void
}