import { serverRequest } from "functions/requests";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Bar from "./Bar";
import Results from "./Results";

const Wrapper = styled.div`
  background: #111;
  height: 100%;
  width: 50vw;
  border-right: 1px solid #333;
  display: flex;
  flex-direction: column;
`;

const Search = () => {
  const [text, setText] = useState("");
  const [requestText, setRequestText] = useState("");
  const [requestTimeout, setRequestTimeout] = useState(null);
  const [results, setResults] = useState([]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  useEffect(
    () => {
      if (requestTimeout) clearTimeout(requestTimeout);
      setRequestTimeout(
        setTimeout(() => {
          if (text !== requestText) {
            setRequestText(text);
          }
        }, 400)
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [text]
  );

  useEffect(() => {
    if (requestText === "") setResults([]);
    if (!requestText) return;
    const fetchData = async () => {
      const json = await serverRequest("/search/youtube", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ text: requestText }),
      });
      setResults(json.data);
    };
    fetchData();
  }, [requestText]);

  return (
    <Wrapper>
      <Bar onChange={handleChange} />
      <Results data={results} />
    </Wrapper>
  );
};

export default Search;
