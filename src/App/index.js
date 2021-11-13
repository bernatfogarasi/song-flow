import styled from "styled-components";
import GlobalStyle from "../style/globalStyle";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Join from "./Join";
import Create from "./Create";
import Room from "./Room";
import SignUp from "./SignUp";

const Wrapper = styled.div`
  background: #111;
  height: 100vh;
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Join} exact path="/join" />
          <Route component={Create} exact path="/create" />
          <Route component={Room} path="/room" />
          <Route component={SignUp} exact path="/signup" />
          <Route render={() => <Redirect to={{ pathname: "/" }} />} />
        </Switch>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
