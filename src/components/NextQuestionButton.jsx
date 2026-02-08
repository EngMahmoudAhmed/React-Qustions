import useQuiz from "../context/useQuiz"
import { nextQuestion } from "./actions"

function NextQuestionButton() {
  const { dispatch, index, questions } = useQuiz()
  const isLast = !questions || index >= questions.length - 1

  return (
    <div>
      <button
        className="btn next"
        onClick={() => dispatch(nextQuestion())}
        disabled={isLast}
      >
        Next Question
      </button>
    </div>
  )
}

export default NextQuestionButton;
