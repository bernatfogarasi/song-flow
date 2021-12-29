import { useEffect, useState } from "react";
import useServerRequest from "./useServerRequest";

const useSession = () => {
  const { json, error, run } = useServerRequest("/user/session");
  useEffect(() => {
    run();
  }, []);

  return { session: json?.data, error, refreshSession: run };
};

export default useSession;
