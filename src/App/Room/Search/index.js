import { useEffect, useState } from "react";
import styled from "styled-components";
import Bar from "./Bar";
import Results from "./Results";

const Wrapper = styled.div`
  background: #1e1e1e;
  height: calc(100vh - 120px);
  width: 50vw;
  border-right: 1px solid #333;
  display: flex;
  flex-direction: column;
`;

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [requestText, setRequestText] = useState("");
  const [requestTimeout, setRequestTimeout] = useState(null);
  const [results, setResults] = useState([]);

  const handleChange = (event) => {
    setSearchText(event.target.value);
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
    console.log(`search: ${searchText}`);
    console.log(`request: ${requestText}`);
  }, [searchText, requestText]);

  useEffect(() => {
    if (requestText === "") setResults([]);
    if (!requestText) return;
    fetch("http://localhost:4000/search/youtube", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: requestText }),
    })
      .then((response) => response.json())
      .then((json) => {
        setResults(json);
      })
      .catch((error) => console.log(error));
  }, [requestText]);

  return (
    <Wrapper>
      <Bar onChange={handleChange} />
      <Results data={results} />
    </Wrapper>
  );
};

export default Search;
