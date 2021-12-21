import { useEffect, useRef } from "react";

const useClickAway = (callback) => {
  const ref = useRef(null);

  const onClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
    };
  });

  return { ref };
};

export default useClickAway;
