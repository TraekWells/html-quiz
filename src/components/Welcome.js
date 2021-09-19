import { useHistory } from "react-router";

const Welcome = () => {
  const history = useHistory();
  return (
    <>
      <h1>How many HTML tags do you know?</h1>
      <p>The Rules</p>
      <p>
        Once you begin, simply type out the HTML tag and hit enter. If the tag
        exists, it will fill the place at the correct place on the grid. If the
        tag does not exist, you’ll see some feedback and your incorrect guess
        will be saved.
      </p>
      <button className="button" onClick={() => history.push("/quiz")}>
        Let's Go!
      </button>
    </>
  );
};

export default Welcome;
