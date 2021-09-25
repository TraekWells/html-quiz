import { useHistory } from "react-router";
import { ArrowRight } from "react-feather";

const Welcome = () => {
  const history = useHistory();
  return (
    <>
      <section className="bg-indigo-600 py-12">
        <h1 className="text-center text-3xl text-indigo-50">
          How many HTML tags do you know?
        </h1>
      </section>
      <div className="container max-w-3xl mx-auto">
        <section className="bg-white m-8 p-10 rounded-lg shadow-md">
          <p className="uppercase mb-2 leading-snug font-semibold text-indigo-600">
            The Rules
          </p>
          <p>
            Once you begin, simply type out the HTML tag and hit enter. If the
            tag exists, it will fill the place at the correct place on the grid.
            If the tag does not exist, you’ll see some feedback and your
            incorrect guess will be saved.
          </p>
          <p>Easy enough right? Are you ready?</p>
          <button className="button" onClick={() => history.push("/quiz")}>
            Let's Go! <ArrowRight className="ml-2" size={20} />
          </button>
        </section>
      </div>
    </>
  );
};

export default Welcome;
