import { useEffect } from "react";
import useServerRequest from "./useServerRequest";

const useSession = () => {
  const { json, error, run } = useServerRequest("/user/session");
  useEffect(() => {
    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { session: json?.data, error, refreshSession: run };
};

export default useSession;
