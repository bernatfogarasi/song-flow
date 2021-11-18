import Feedback from "components/Feedback";

const SignUpConfirmation = () => {
  return (
    <Feedback success title="Confirm your email address">
      <p>
        We have sent an email with a confirmation link to your email address.
      </p>
      <p>
        In order to complete the sign-up process, please click the confirmation
        link in your email.
      </p>
    </Feedback>
  );
};

export default SignUpConfirmation;
