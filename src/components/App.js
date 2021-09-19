import { BrowserRouter, Route } from "react-router-dom";
import Quiz from "./Quiz";
import Welcome from "./Welcome";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Welcome}></Route>
      <Route path="/quiz" exact component={Quiz}></Route>
    </BrowserRouter>
  );
};

export default App;
