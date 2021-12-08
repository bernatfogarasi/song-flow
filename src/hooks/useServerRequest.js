import { useState, useEffect } from "react";

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
    const host =
      window.location.hostname === "localhost"
        ? "http://localhost:4000"
        : "http://api.teamlistener.com";
    const fetchData = async () => {
      try {
        const response = await fetch(`${host}${directory}`, options);
        const json = await response.json();
        setJson(json);
        setMessage(json.message);
        setStatus(response.status);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [count]);

  return { json, message, status, error, run };
};

export default useServerRequest;
