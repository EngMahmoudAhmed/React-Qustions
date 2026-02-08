import useQuiz from "../context/useQuiz";
import ReactLogo from "/react.png";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  flexDirection:"column",
};

function Header() {
  const {status, index, questions } = useQuiz()
  return (
    <div style={style}>
      <img src={ReactLogo} alt="React logo" width={100} />
      <h1>The React Quiz</h1>
      {status === "active" && (
        <p>Question {index + 1} of {questions.length}</p>
      )}
    </div>
  );
}

export default Header;
