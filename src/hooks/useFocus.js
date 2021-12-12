import { useRef, useState } from "react";

const useFocus = () => {
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef();
  const setFocus = (bool) => {
    setIsFocused(bool);
    if (bool) ref.current && ref.current.focus();
  };
  return [ref, setFocus, isFocused];
};

export default useFocus;
