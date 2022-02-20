import "./App.css";
import RobotsPage from "./pages/RobotsPage/RobotsPage";
import { Routes, Route, Navigate } from "react-router-dom";
import CreateRobot from "./components/createRobot";
function App() {
  return (
    <>
      <h1>Robots</h1>
      <Routes>
        <Route path="/robots" element={<RobotsPage />} />
        <Route path="/" element={<Navigate to="/robots" />} />
        <Route path="robots/create" element={<CreateRobot />} />
      </Routes>
    </>
  );
}

export default App;
