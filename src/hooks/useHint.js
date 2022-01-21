import { useContext } from "react";

import { HintContext } from "context";

const useHint = (configGiven = { time: 3000 }) => {
  const { config, setHint, setConfig, ...context } = useContext(HintContext);
  const setTemporaryHint = (value) => {
    setConfig(configGiven);
    setHint(value);
    setTimeout(() => {
      setHint(undefined);
    }, configGiven.time);
  };

  return {
    config: config || configGiven,
    ...context,
    setHint: setTemporaryHint,
  };
};

export default useHint;
