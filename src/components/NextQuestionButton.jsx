import useQuiz from "../context/useQuiz"
import { nextQuestion } from "./actions"
// import { answer } from "./actionsTypes"

function NextQuestionButton() {
  const { dispatch, index, questions, answer } = useQuiz()
  const isLast = !questions || index >= questions.length - 1
  if (answer === null) return null

  return (
      <button
        className="btn next"
        onClick={() => dispatch(nextQuestion())}
        disabled={isLast}
      >
        Next Question
      </button>
  )
}

export default NextQuestionButton;
