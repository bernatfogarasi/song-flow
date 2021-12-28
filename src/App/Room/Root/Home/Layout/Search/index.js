import { RoomContext } from "context";
import { serverRequest } from "functions/requests";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Input = styled.input`
  border-radius: 4px;
  border: 0px;
  padding: 5px 50px 5px 5px;
  font-size: 30px;
  width: 100%;
  background: #1a1a1a;
  color: white;
  :focus {
    outline-style: solid;
    outline-color: #f3ca20;
    outline-width: 2px;
  }
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
  const [requestText, setRequestText] = useState("");
  const [requestTimeout, setRequestTimeout] = useState(null);
  const { setResults } = useContext(RoomContext);

  const onChange = (event) => {
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
    <Wrapper className={className}>
      <Icon>
        <Circle />
        <Line />
      </Icon>
      <Input type="text" onChange={onChange} />
    </Wrapper>
  );
};

export default Search;
