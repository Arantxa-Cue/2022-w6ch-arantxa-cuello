import "./App.css";
import RobotsPage from "./pages/RobotsPage/RobotsPage";
import { Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <>
      <h1>Robots</h1>
      <Routes>
        <Route path="/robots" element={<RobotsPage />} />
        <Route path="/" element={<Navigate to="/robots" />} />
      </Routes>
    </>
  );
}

export default App;
