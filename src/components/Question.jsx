
function Question({ question }) {

  return (
    <div>
      {question.question}
      <div className="options">{question.options.map(option => <button key={option} className="btn">{option}</button>)}</div>
    </div>
  )
}

export default Question;
