import imageSearch from "assets/icons/search.png";
import imageCross from "assets/icons/cross.png";
import { serverRequest } from "functions/requests";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Results from "./Results";
import useClickAway from "hooks/useClickAway";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  position: relative;
  transition: 0.2s;
  gap: 10px;
  height: 100%;
`;

const Input = styled.input`
  border-radius: 4px;
  font-size: 16px;
  border: none;
  background: #222;
  height: 100%;
  box-sizing: border-box;
  padding-right: 40px;
  padding: 10px;
  font-family: MontserratSemibold;
  width: 100%;
  :focus {
    outline: none;
  }
  color: #ddd;
`;

const Icon = styled.img`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%) scale(0.9);
  height: 60%;
  cursor: pointer;
  filter: invert();
`;

const IconClickThrough = styled(Icon)`
  pointer-events: none;
`;

const Search = ({ className }) => {
  const [text, setText] = useState("");
  const [rooms, setRooms] = useState([]);

  const refInput = useRef();

  const onClickAway = () => {
    setText("");
    setRooms([]);
    refInput.current.blur();
  };

  const { ref } = useClickAway(onClickAway);

  const onChange = async (event) => {
    setText(event.target.value);
  };

  const onCloseClick = () => {
    console.log("close");
    setText("");
    setRooms([]);
  };

  useEffect(() => {
    if (text === "") {
      setText("");
      setRooms([]);
      return;
    }
    const fetchData = async () => {
      console.log(text);
      const json = await serverRequest("/search/rooms", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });
      setRooms(json.data);
      console.log(json);
    };
    fetchData();
  }, [text]);

  return (
    <Wrapper className={className} ref={ref}>
      <Input
        ref={refInput}
        value={text}
        onChange={onChange}
        placeholder="Search rooms"
        title="Search rooms"
      />
      {text === "" ? (
        <IconClickThrough src={imageSearch} />
      ) : (
        <Icon src={imageCross} onClick={onCloseClick} />
      )}
      {rooms?.length > 0 && <Results rooms={rooms} />}
    </Wrapper>
  );
};

export default Search;
