import "./App.css";
import RobotsPage from "./pages/RobotsPage/RobotsPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Robots</h1>
      <Routes>
        <Route path="/robots" element={<RobotsPage />} />
      </Routes>
    </>
  );
}

export default App;
