import { useState } from "react";
import ServiceLevelSelect from "./ServiceLevelSelect";
import QuestionInput from "./QuestionInput";
import Result from "./Result";

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

export default App;
