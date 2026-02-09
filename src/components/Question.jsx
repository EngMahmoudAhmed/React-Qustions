import useQuiz from "../context/useQuiz";
import { newAnswer } from "./actions";
import NextQuestionButton from "./NextQuestionButton";

function Question() {
  const { questions, index, answer, dispatch } = useQuiz()
  const question = questions[index]

  if(!question) return null

  return (
    <div>
      <div className="question">{question.question}</div>
      <div className="options">
        {question.options.map((option, idx) => (
          <button
            key={option}
            onClick={() => answer === null && dispatch(newAnswer(idx))}
            disabled={answer !== null}
            className={`btn ${answer === idx ? "selected" : ""} 
            ${answer !== null && question.correctAnswer === idx ? "correct" : ""}
            ${answer !== null && answer === idx && question.correctAnswer !== idx ? "correct" : ""}`}

          >
            {option}
          </button>
        ))}
      </div>
      <NextQuestionButton />
    </div>
  );
}

export default Question;

// import React, { useState, useRef, useEffect } from "react";

// function Question({ question, dispatch }) {
//   const [selected, setSelected] = useState(null);
//   const refs = useRef([]);

//   useEffect(() => {
//     if (selected !== null && refs.current[selected]) {
//       refs.current[selected].focus();
//     }
//   }, [selected]);

//   return (
//     <div>
//       <div className="question">{question.question}</div>
//       <div className="options">
//         {question.options.map((option, index) => (
//           <button
//             key={option}
//             ref={(el) => (refs.current[index] = el)}
//             onClick={() => {
//               setSelected(index);
//               dispatch(index);
//             }}
//             tabIndex={0}
//             style={selected === index ? { outline: "3px solid #60a5fa" } : {}}
//             className={`btn ${selected === index ? "focused" : ""} ${
//               question.correctAnswer ? "correct" : "wrong"
//             }`}
//           >
//             {option}
//           </button>
//         ))}
//       </div>
//       {question.correctAnswer}
//     </div>
//   );
// }

// export default Question;
