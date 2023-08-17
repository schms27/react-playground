import { useState } from "react";
import { useEffect } from "react";

export function useLocalStorageState(initialState, keyName) {
  const [storedState, setStoredState] = useState(function () {
    const storedValue = localStorage.getItem(keyName);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(keyName, JSON.stringify(storedState));
    },
    [storedState, keyName]
  );

  return [storedState, setStoredState];
}
