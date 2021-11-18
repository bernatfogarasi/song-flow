import Feedback from "components/Feedback";
import Link from "components/Link";

const Success = () => {
  return (
    <Feedback success title="Confirmation successful">
      <p>Your email was confirmed successfully.</p>
      <p>
        Please <Link href="/">log in</Link> to continue.
      </p>
    </Feedback>
  );
};

export default Success;
