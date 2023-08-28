import AnswerOptions from "./AnswerOptions";

function Question({ question, dispatch, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <AnswerOptions
        question={question}
        dispatch={dispatch}
        answer={answer}
      ></AnswerOptions>
    </div>
  );
}

export default Question;
