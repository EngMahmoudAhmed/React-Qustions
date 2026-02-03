import { useEffect, useReducer } from "react";
import './App.css'
import Header from "./components/Header";
import Main from "./components/Main";
import reducer from "./components/reducer";
import { initialState } from "./components/initialState";
import { datarecived, datafailed } from "./components/actions";
import Error from "./components/Error";
import Loader from "./components/Loader";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";

function App() {
  const [{ questions, status, index }, dispatch] = useReducer(reducer, initialState);
  console.log(status, questions);

  const numQuestions = questions.length

  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch(datarecived(data)))
      .catch((err) => dispatch(datafailed(err)));
  }, []);

  return (
    <>
      <Header />
      <Main>
        {status === "ready" && <StartScreen numQuestions={numQuestions} dispatch={dispatch} />}
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "active" && <Question question={questions[index]} />}
      </Main>
    </>
  );
}

export default App;
