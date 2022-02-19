import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRobotsThunk } from "../redux/thunks/robotsThunks";
import Robot from "./robotComponent";

const Robots = () => {
  const robots = useSelector((state) => state.robots);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRobotsThunk);
  }, [dispatch]);

  return (
    <ul>
      {robots.map((robot) => (
        <Robot key={robot._id} robot={robot} />
      ))}
    </ul>
  );
};

export default Robots;
