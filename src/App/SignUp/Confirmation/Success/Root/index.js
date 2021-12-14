import Feedback from "components/Feedback";
import Link from "components/LinkRefer";

const Success = () => {
  return (
    <Feedback success title="Confirmation successful">
      <p>Your email was confirmed successfully.</p>
      <p>
        Please <Link to="/">log in</Link> to continue.
      </p>
    </Feedback>
  );
};

export default Success;
