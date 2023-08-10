import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    setStep((s) => clamp(s - 1, 1, 3));
  }

  function handleNext() {
    setStep((s) => clamp(s + 1, 1, 3));
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button
              caption="Previous"
              onClickHandler={handlePrevious}
              color="#fff"
              backgroundColor="#7950f2"
            >
              <span>👈</span> Previous
            </Button>
            <Button
              onClickHandler={handleNext}
              color="#fff"
              backgroundColor="#7950f2"
            >
              <span>👉</span> Next
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ color, backgroundColor, onClickHandler, children }) {
  return (
    <button
      style={{ backgroundColor: backgroundColor, color: color }}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}

export default App;
