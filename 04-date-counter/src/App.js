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

  function handleReset() {
    setDeltaDays(0);
    setSteps(1);
  }

  return (
    <div className="App">
      <div>
        <span>Step: {steps}</span>
        <input
          type="range"
          min="0"
          max="10"
          value={steps}
          onChange={(e) => setSteps(Number(e.target.value))}
        />
      </div>

      <div>
        <span>Days: </span>
        <button onClick={() => setDeltaDays((d) => d - steps)}>-</button>
        <input
          value={deltaDays}
          onChange={(e) => setDeltaDays(Number(e.target.value))}
        />
        <button onClick={() => setDeltaDays((d) => d + steps)}>+</button>
      </div>

      <div>
        {deltaDays} days from today is: <b>{getDate(deltaDays)}</b>
      </div>

      {deltaDays !== 0 || steps !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
