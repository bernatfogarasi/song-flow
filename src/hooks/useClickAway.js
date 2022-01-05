import { useEffect, useRef } from "react";

const useClickAway = (callback) => {
  const ref = useRef(null);

  const onClickAway = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", onClickAway, true);
    document.addEventListener("contextmenu", onClickAway, true);
    document.onkeydown = function (event) {
      if (event.key === "Escape") {
        callback();
      }
    };

    return () => {
      document.removeEventListener("click", onClickAway, true);
      document.removeEventListener("contextmenu", onClickAway, true);
    };
  });

  return { ref };
};

export default useClickAway;
