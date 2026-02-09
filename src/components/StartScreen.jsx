import useQuiz from "../context/useQuiz";
import { start } from "./actions";
import NextQuestionButton from "./NextQuestionButton";

function StartScreen() {
  const {dispatch, questions} = useQuiz();
  const numQuestions = questions.length;

  return (
    <div className="star">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} question to Test your React Mastry</h3>
      <button onClick={() => dispatch(start())}>Let's Start</button>
      {/* <NextQuestionButton /> */}
    </div>
  );
}

export default StartScreen;