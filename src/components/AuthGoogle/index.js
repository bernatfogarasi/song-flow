import styled from "styled-components";
import { GoogleLogin } from "react-google-login";
import google from "assets/icons/google_black.png";
import { serverRequest } from "functions/requests";
import AuthProvider from "components/AuthProvider";
import { useState } from "react";

const Wrapper = styled.div``;

const AuthGoogle = ({ className, method }) => {
  const [loading, setLoading] = useState(false);

  const responseGoogle = async ({ tokenId }) => {
    setLoading(true);
    const json = await serverRequest(`/user/auth/google`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tokenId: tokenId,
      }),
      credentials: "include",
    });
    if (json.message === "success") window.location.href = "/";
    else setLoading(false);
  };

  const clientId =
    "95200909886-co62p1sehhu134kdvoai53gomdkac4p6.apps.googleusercontent.com";

  return (
    <Wrapper className={className}>
      {["login", "signup"].includes(method) && (
        <GoogleLogin
          prompt="select_account"
          clientId={clientId}
          render={(renderProps) => (
            <AuthProvider
              provider="Google"
              icon={google}
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              method={method}
              loading={loading}
            ></AuthProvider>
          )}
          onSuccess={responseGoogle}
          onFailure={() => console.log("google auth fail")}
        />
      )}
    </Wrapper>
  );
};

export default AuthGoogle;
