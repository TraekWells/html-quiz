import { Routes, Route, BrowserRouter } from "react-router-dom";
import Quiz from "./components/Quiz";
import Welcome from "./components/Welcome";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
