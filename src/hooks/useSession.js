import { useEffect } from "react";
import useServerRequest from "./useServerRequest";

const useSession = () => {
  const { json, error, rerun } = useServerRequest("/user/session");
  return { data: json?.data, error, rerun };
};

export default useSession;
