import { useState } from "react";

function getDate(deltaDays) {
  var targetDate = new Date(
    new Date().setDate(new Date().getDate() + deltaDays)
  );

  var locale = "en-US";

  var weekday = targetDate.toLocaleString(locale, { weekday: "short" });
  var dd = String(targetDate.getDate()).padStart(2, "0");
  var monthName = targetDate.toLocaleString(locale, { month: "short" });
  var yyyy = targetDate.getFullYear();

  return weekday + " " + dd + ". " + monthName + " " + yyyy;
}

function App() {
  const [steps, setSteps] = useState(1);
  const [deltaDays, setDeltaDays] = useState(0);

  return (
    <div className="App">
      <div>
        <button onClick={() => setSteps((s) => s - 1)}>-</button>
        <span>Steps: {steps}</span>
        <button onClick={() => setSteps((s) => s + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setDeltaDays((d) => d - steps)}>-</button>
        <span>Days: {deltaDays}</span>
        <button onClick={() => setDeltaDays((d) => d + steps)}>+</button>
      </div>

      <div>
        {deltaDays} days from today is: <b>{getDate(deltaDays)}</b>
      </div>
    </div>
  );
}

export default App;
