import { RoomContext } from "context";
import { useContext } from "react";

const useRoom = () => {
  const room = useContext(RoomContext);
  return { ...room };
};

export default useRoom;
