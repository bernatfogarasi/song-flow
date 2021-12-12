import { useEffect, useState } from "react";
import useServerRequest from "./useServerRequest";

const useSession = () => {
  const { json, error, run } = useServerRequest("/user/session");
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    run();
  }, []);

  useEffect(() => {
    // console.log(error);
  }, [error]);

  return { session: json?.data, error, refreshSession: run };
};

export default useSession;
