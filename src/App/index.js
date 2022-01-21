import styled from "styled-components";
import GlobalStyle from "style/globalStyle";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Root from "./Root";
import Room from "./Room/Root";
import SignUp from "./SignUp/Root";
import SignUpConfirmation from "./SignUp/Confirmation/Root";
import SignUpConfirmationEmailAlreadyConfirmed from "./SignUp/Confirmation/EmailAlreadyConfirmed/Root";
import SignUpConfirmationSuccess from "./SignUp/Confirmation/Success/Root";
import SignUpConfirmationTokenNotFound from "./SignUp/Confirmation/TokenNotFound/Root";
import useSession from "hooks/useSession";
import { HintContext, SessionContext } from "context";
import { useState } from "react";

const Wrapper = styled.div`
  /* height: 100vh; */
`;

const App = () => {
  const [hint, setHint] = useState();
  const [config, setConfig] = useState();
  const { session, refreshSession, error } = useSession();
  const onContextMenu = (event) => {
    // event.preventDefault();
  };

  return (
    <Wrapper onContextMenu={onContextMenu}>
      <GlobalStyle />
      <SessionContext.Provider value={{ session, refreshSession, error }}>
        <HintContext.Provider value={{ hint, setHint, config, setConfig }}>
          <Switch location={window.location} key={window.location.pathname}>
            <Route component={Root} exact path="/" />
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
        </HintContext.Provider>
      </SessionContext.Provider>
    </Wrapper>
  );
};

export default withRouter(App);
