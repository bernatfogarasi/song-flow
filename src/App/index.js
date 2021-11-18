import styled from "styled-components";
import GlobalStyle from "style/globalStyle";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./Root";
import Join from "./Join/Root";
import Create from "./Create/Root";
import Room from "./Room/Root";
import SignUp from "./SignUp/Root";
import SignUpConfirmation from "./SignUp/Confirmation/Root";
import SignUpConfirmationEmailAlreadyConfirmed from "./SignUp/Confirmation/EmailAlreadyConfirmed/Root";
import SignUpConfirmationSuccess from "./SignUp/Confirmation/Success/Root";
import SignUpConfirmationTokenNotFound from "./SignUp/Confirmation/TokenNotFound/Root";

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
          <Route
            component={SignUpConfirmation}
            exact
            path="/signup/confirmation"
          />
          <Route
            component={SignUpConfirmationTokenNotFound}
            exact
            path="/signup/confirmation/token-not-found"
          />

          <Route
            component={SignUpConfirmationEmailAlreadyConfirmed}
            exact
            path="/signup/confirmation/email-already-confirmed"
          />

          <Route
            component={SignUpConfirmationSuccess}
            exact
            path="/signup/confirmation/success"
          />
          <Route render={() => <Redirect to={{ pathname: "/" }} />} />
        </Switch>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
