import actionTypes from "../actions/actionsTypes";

const robotsReducer = (robots = [], action = {}) => {
  let newRobots;

  switch (action.type) {
    case actionTypes.loadRobots:
      newRobots = [...action.robots];
      break;

    case actionTypes.deleteRobot:
      newRobots = robots.filter((robot) => robot._id !== action.id);
      break;

    case actionTypes.createRobot:
      newRobots = [...robots, action.robot];
      break;
    default:
      newRobots = [...robots];
  }
  return newRobots;
};

export default robotsReducer;
