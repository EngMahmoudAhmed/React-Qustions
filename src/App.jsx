import { useEffect } from "react";
import './App.css'
import Header from "./components/Header";
import Main from "./components/Main";
import { datarecived, datafailed } from "./components/actions";
import Error from "./components/Error";
import Loader from "./components/Loader";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import useQuiz from "./context/useQuiz";
import NextQuestionButton from "./components/NextQuestionButton";

function App() {
  const URL = "http://localhost:9000/questions";
  const { questions, status, index, answer, dispatch} = useQuiz()
  console.log(status, questions);
  
  const numQuestions = questions.length
  
  useEffect(function () {
    const controller = new AbortController();
    fetch(URL, {signal:controller.signal})
      .then((res) => res.json())
      .then((data) => dispatch(datarecived(data)))
      .catch((err) => dispatch(datafailed(err)));
      return function(){
        controller.abort();
        console.log('fetch aborted');
      }
  }, [dispatch]);

  return (
    <>
      <Header />
      <Main>
        {status === "ready" && <StartScreen numQuestions={numQuestions} dispatch={dispatch} />}
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "active" && <Question question={questions[index]} answer={answer} dispatch={dispatch} />}
      </Main>
      <NextQuestionButton />
    </>
  );
}

export default App;
