import Feedback from "components/Feedback";
import Link from "components/LinkRefer";

const TokenNotFound = () => {
  return (
    <Feedback title="Confirmation token not found">
      <p>The email confirmation token you provided did not match any user.</p>
      <p>
        Please <Link href="/signup">sign up</Link>.
      </p>
    </Feedback>
  );
};

export default TokenNotFound;
