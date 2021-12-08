import { useEffect } from "react";
import useServerRequest from "./useServerRequest";

const useSession = () => {
  const { json, error, run } = useServerRequest("/user/session");

  useEffect(() => {
    run();
  }, []);

  useEffect(() => {
    if (json) console.log(json);
  }, [json]);

  return { session: json?.data, error, refreshSession: run };
};

export default useSession;
