import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [yourTipPercentage, setYourTipPercentage] = useState(0);
  const [friendTipPercentage, setFriendTipPercentage] = useState(0);

  return (
    <div className="App">
      <QuestionInput question="How much was the Bill?">
        <input
          type="input"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        ></input>
      </QuestionInput>
      <QuestionInput question="How did you like the service?">
        <ServiceLevelSelect
          tipPercentage={yourTipPercentage}
          setTipPercentage={setYourTipPercentage}
        />
      </QuestionInput>
      <QuestionInput question="How did your friend like the service?">
        <ServiceLevelSelect
          tipPercentage={friendTipPercentage}
          setTipPercentage={setFriendTipPercentage}
        />
      </QuestionInput>
      <Result
        bill={Number(bill)}
        yourRating={yourTipPercentage}
        friendsRating={friendTipPercentage}
      />
    </div>
  );
}

function Result({ bill, yourRating, friendsRating }) {
  const tipPercentage = Number((friendsRating + yourRating) / 2);
  const tip = bill * tipPercentage;
  const total = Number(tip + bill);
  return (
    <div>
      <b>
        You pay {total}$ ({bill}$ + {tip}$)
      </b>
    </div>
  );
}

function QuestionInput({ question, children }) {
  return (
    <div>
      <span>{question}</span>
      {children}
    </div>
  );
}

function ServiceLevelSelect({ tipPercentage, setTipPercentage }) {
  return (
    <select
      value={tipPercentage}
      onChange={(e) => {
        console.log("service level changed " + e.target.value);
        setTipPercentage(Number(e.target.value));
      }}
    >
      <option value="0">Dissatisfied (0%)</option>
      <option value="0.05">It was ok (5%)</option>
      <option value="0.1">It was good (10%)</option>
      <option value="0.2">Amazing (20%)</option>
    </select>
  );
}

export default App;
