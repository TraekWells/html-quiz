import { useHistory } from "react-router";

const Welcome = () => {
  const history = useHistory();
  return (
    <>
      <h1>I'm the Welcome</h1>
      <button onClick={() => history.push("/quiz")}>Start Quiz</button>
    </>
  );
};

export default Welcome;
