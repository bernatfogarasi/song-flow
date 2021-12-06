import { useEffect } from "react";
import useServerRequest from "./useServerRequest";

const useSession = () => {
  const { json, error, run } = useServerRequest("/user/session");
  useEffect(() => {
    run();
  }, []);
  return { data: json?.data, error, run };
};

export default useSession;
