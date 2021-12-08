import SearchIcon from "components/SearchIcon";
import { serverRequest } from "functions/requests";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  position: relative;
`;

const Input = styled.input`
  border-radius: 4px;
  font-size: 16px;
  /* width: 300px; */
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
  const [searchText, setSearchText] = useState("");
  const [requestText, setRequestText] = useState("");
  const [requestTimeout, setRequestTimeout] = useState(null);
  const [results, setResults] = useState([]);

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    if (requestTimeout) clearTimeout(requestTimeout);
    setRequestTimeout(
      setTimeout(() => {
        if (searchText !== requestText) {
          setRequestText(searchText);
        }
      }, 400)
    );
  }, [searchText]);

  useEffect(() => {
    if (requestText === "") setResults([]);
    if (!requestText) return;
    serverRequest("/search/youtube", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: requestText }),
    });
  }, [requestText]);

  return (
    <Wrapper>
      <Input value={text} onChange={onTextChange} />
      <Icon color="black" />
    </Wrapper>
  );
};

export default Search;
