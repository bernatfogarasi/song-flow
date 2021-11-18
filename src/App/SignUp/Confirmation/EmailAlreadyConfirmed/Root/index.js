import Feedback from "components/Feedback";
import Link from "components/Link";

const EmailAlreadyConfirmed = () => {
  return (
    <Feedback success title="Email already confirmed.">
      <p>Your email is already confirmed.</p>
      <p>
        Please <Link href="">log in</Link> with your existing account.
      </p>
    </Feedback>
  );
};

export default EmailAlreadyConfirmed;
