import { useEffect, useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [inCurrency, setInCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("EUR");
  const [result, setResult] = useState(0);

  function handleInputValueChanged(value) {
    setInputValue(value);
  }

  function handleInCurrencyChanged(currency) {
    console.log("in currency changed: " + currency);
    setInCurrency(currency);
  }

  function handleTargetCurrencyChanged(currency) {
    console.log("target currency changed: " + currency);
    setTargetCurrency(currency);
  }

  useEffect(
    function () {
      const controller = new AbortController();
      async function convertCurrency() {
        try {
          const response = await fetch(
            `https://api.frankfurter.app/latest?amount=${inputValue}&from=${inCurrency}&to=${targetCurrency}`,
            { signal: controller.signal }
          );
          const data = await response.json();
          console.log(data);
          setResult(data.rates[targetCurrency]);
        } catch (err) {
          if (err.name !== "AbortError") console.error(err.message);
        }
      }
      if (inCurrency === targetCurrency) {
        setResult(inputValue);
      } else if (inputValue > 0) {
        convertCurrency();
      } else {
        setResult(0);
      }
      return function cleanup() {
        controller.abort();
      };
    },
    [inputValue, inCurrency, targetCurrency]
  );

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => handleInputValueChanged(Number(e.target.value))}
      />
      <select
        value={inCurrency}
        onChange={(e) => handleInCurrencyChanged(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={targetCurrency}
        onChange={(e) => handleTargetCurrencyChanged(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{result}</p>
    </div>
  );
}
