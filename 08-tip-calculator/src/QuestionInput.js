export default function QuestionInput({ question, children }) {
  return (
    <div>
      <span>{question}</span>
      {children}
    </div>
  );
}
