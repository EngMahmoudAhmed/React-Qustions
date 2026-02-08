import useQuiz from "../context/useQuiz";
import { start } from "./actions";


function StartScreen() {
  const {dispatch, questions} = useQuiz();
  const numQuestions = questions.length;
  console.log(dispatch);

  return (
    <div className="star">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} question to Test your React Mastry</h3>
      <button onClick={() => dispatch(start())}>Let's Start</button>
    </div>
  );
}

export default StartScreen;