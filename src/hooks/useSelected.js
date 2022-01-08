import { useEffect, useState } from "react";
import useClickAway from "./useClickAway";
import useRoom from "./useRoom";

const useSelected = (type, content, index) => {
  const { selected: selectedGlobal, setSelected: setSelectedGlobal } =
    useRoom();

  const [selectedThis, setSelectedThis] = useState(false);

  const onClickAway = () => {
    if (selectedThis) setSelectedGlobal(undefined);
  };

  const { ref } = useClickAway(onClickAway);

  const onClickAwayExit = () => {
    setSelectedGlobal(undefined);
  };

  const { ref: refExit } = useClickAway(onClickAwayExit);

  const setSelected = () => {
    setSelectedGlobal({ type, content, index });
  };

  useEffect(() => {
    setSelectedThis(
      selectedGlobal?.index === index &&
        selectedGlobal?.type === type &&
        selectedGlobal?.content?._id === content?._id &&
        selectedGlobal?.content?.id === content?.id
    );
  }, [selectedGlobal]);

  return { ref, refExit, selected: selectedThis, setSelected };
};

export default useSelected;
