import SearchIcon from "components/SearchIcon";
import { serverRequest } from "functions/requests";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Results from "./Results";
import useFocus from "hooks/useFocus";

const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  position: relative;

  ${({ isFocused }) => isFocused && `transform: scale(1.1);`}
  transition: 0.2s;
`;

const Input = styled.input`
  border-radius: 4px;
  font-size: 16px;
  border: 1px solid #333;
  background: #fff;
  padding: 10px;
  padding-right: 40px;
  font-family: MontserratSemibold;
  width: calc(100% - 50px);
`;

const Icon = styled(SearchIcon)`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%) scale(0.9);
`;

const Search = () => {
  const [text, setText] = useState("");
  const [requestText, setRequestText] = useState("");
  const [requestTimeout, setRequestTimeout] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [focusRef, setFocus, isFocused] = useFocus();
  //   const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (requestTimeout) clearTimeout(requestTimeout);
    setRequestTimeout(
      setTimeout(() => {
        if (text !== requestText) {
          setRequestText(text);
        }
      }, 400)
    );
  }, [text]);

  useEffect(() => {
    if (requestText === "") setRooms([]);
    if (!requestText) return;
    const fetchData = async () => {
      const json = await serverRequest("/search/rooms", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: requestText }),
      });
      setRooms(json.data);
    };
    fetchData();
  }, [requestText]);

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onClose = () => {
    setText("");
    setRequestText("");
    setRooms([]);
    setFocus(false);
  };

  const onOpen = () => {
    setFocus(true);
  };

  //   const onFocus = () => {
  //     setShowResults(true);
  //   };

  //   const onBlur = () => {
  //     setShowResults(false);
  //   };

  return (
    <Wrapper isFocused={isFocused}>
      <Input
        ref={focusRef}
        value={text}
        onChange={onTextChange}
        onFocus={onOpen}
        onBlur={onClose}
        // onFocus={onFocus}
        // onBlur={onBlur}
      />
      <Icon
        color="black"
        showClose={text !== ""}
        onOpen={onOpen}
        onClose={onClose}
      />
      <Results
        // show={showResults}
        rooms={rooms}
      />
    </Wrapper>
  );
};

export default Search;
