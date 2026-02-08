import { useContext } from 'react'
import QuizContext from './QuizContext'

function useQuiz() {
    const context = useContext(QuizContext);
    if (!context) {
        throw new Error("useQuiz must be used within a QuizOrovider")
    }
  return context;
}

export default useQuiz