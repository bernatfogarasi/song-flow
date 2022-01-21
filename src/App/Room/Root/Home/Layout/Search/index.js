import { serverRequest } from "functions/requests";
import useRoom from "hooks/useRoom";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Input = styled.input`
  border-radius: 4px;
  border: 0px;
  padding: 10px 50px 10px 10px;
  font-size: 30px;
  background: #1a1a1a;
  color: white;
  :focus {
    border: 2px solid #d6b11c;
    outline: none;
  }
  box-sizing: border-box;
  width: 100%;
  font-size: 20px;
`;

const Icon = styled.div`
  position: absolute;
  top: 50%;
  right: 35px;
  pointer-events: none;
  transform: translateY(-14px);
`;

const Circle = styled.div`
  position: absolute;
  border: 2px solid #999;
  height: 16px;
  width: 16px;
  border-radius: 16px;
`;

const Line = styled.hr`
  position: absolute;
  width: 12px;
  border: 1px solid #999;
  transform: translate(14px, 12px) rotate(45deg);
`;

const Search = ({ className }) => {
  const [text, setText] = useState("");
  // const [requestText, setRequestText] = useState("");
  // const [requestTimeout, setRequestTimeout] = useState();
  const { setResults, setResultsSpotify, setResultsYoutube } = useRoom();

  const onChange = (event) => {
    setText(event.target.value);
    // if (requestTimeout) clearTimeout(requestTimeout);
    // setRequestTimeout(
    //   setTimeout(() => {
    //     if (event.target.value !== requestText) {
    //       setRequestText(event.target.value);
    //     }
    //   }, 400)
    // );
  };

  useEffect(() => {
    if (text === "") {
      setResults(undefined);
      return;
    }
    const fetchData = async () => {
      const fetchProvider = async (site) => {
        const json = await serverRequest(`/search/${site}`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ text }),
        });
        return json.data;
      };
      const spotify = await fetchProvider("spotify");
      const youtube = await fetchProvider("youtube");
      if (text) setResults({ spotify, youtube });
    };
    fetchData();
  }, [text]);

  return (
    <Wrapper className={className}>
      <Icon>
        <Circle />
        <Line />
      </Icon>
      <Input
        type="text"
        onChange={onChange}
        placeholder="Search content"
        value={text}
      />
    </Wrapper>
  );
};

export default Search;
