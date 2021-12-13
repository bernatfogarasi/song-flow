import { useState, useEffect } from "react";
import { serverHost } from "functions/requests";

const useServerRequest = (
  directory,
  options = {
    credentials: "include",
  }
) => {
  const [json, setJson] = useState();
  const [status, setStatus] = useState();
  const [message, setMessage] = useState();
  const [error, setError] = useState();
  const [count, setCount] = useState(0);

  const run = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (!count) return;

    const fetchData = async () => {
      try {
        const response = await fetch(`${serverHost}${directory}`, options);
        const json = await response.json();
        setJson(json);
        setMessage(json.message);
        setStatus(response.status);
        if (response.status !== 200) setError(json);
        else setError(undefined);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [count]);

  return { json, message, status, error, run };
};

export default useServerRequest;
