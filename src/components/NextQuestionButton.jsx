import useQuiz from "../context/useQuiz"
import { nextQuestion } from "./actions"
// import { answer } from "./actionsTypes"

function NextQuestionButton() {
  const { dispatch, index, questions, answer } = useQuiz()
  if (answer === null) return null
  const isLast = index >= questions.length - 1

  return (
      <button
        className="btn next"
        onClick={() => dispatch(nextQuestion())}
      >
        {isLast ? "Finish Quiz" : "Next Question"}
      </button>
  )
}

export default NextQuestionButton;
