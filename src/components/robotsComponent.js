import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadRobotsThunk,
  deleteRobotThunk,
} from "../redux/thunks/robotsThunks";
import Robot from "./robotComponent";

const Robots = () => {
  const robots = useSelector((state) => state.robots);
  const dispatch = useDispatch();

  const deleteRobot = (id) => {
    dispatch(deleteRobotThunk(id));
  };

  useEffect(() => {
    dispatch(loadRobotsThunk);
  }, [dispatch]);

  return (
    <ul>
      {robots.map((robot) => (
        <Robot key={robot._id} robot={robot} onDelete={deleteRobot} />
      ))}
    </ul>
  );
};

export default Robots;
