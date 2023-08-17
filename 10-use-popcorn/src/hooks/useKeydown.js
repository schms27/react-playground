import { useEffect } from "react";

export function useKeydown(keycode, callback) {
  useEffect(
    function () {
      function keydownCallback(e) {
        if (e.code === keycode) {
          callback();
        }
      }

      document.addEventListener("keydown", keydownCallback);

      return function cleanup() {
        document.removeEventListener("keydown", keydownCallback);
      };
    },
    [keycode, callback]
  );
}
