import { useSelector } from "react-redux";
import Robots from "../../components/robotsComponent";

const RobotsPage = () => {
  const robot = useSelector((state) => state.robots[0]);
  return (
    <>
      <h2>Robots list</h2>
      <Robots robot={robot} />
    </>
  );
};

export default RobotsPage;
