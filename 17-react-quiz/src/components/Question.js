import { useQuiz } from "../context/QuizContext";
import AnswerOptions from "./AnswerOptions";

function Question() {
  const { questions, dispatch, answer, index } = useQuiz();
  const question = questions[index];
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
