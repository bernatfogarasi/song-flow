import { HintContext } from "context";
import { useContext } from "react";

const useHint = (configInitial = { time: 3000 }) => {
  const { config, setHint, setConfig, ...context } = useContext(HintContext);
  const setTemporaryHint = (value) => {
    setConfig(configInitial);
    setHint(value);
    setTimeout(() => {
      setHint(undefined);
    }, configInitial.time);
  };

  return {
    config: config || configInitial,
    ...context,
    setHint: setTemporaryHint,
  };
};

export default useHint;
