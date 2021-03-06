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

    case actionTypes.updateRobot:
      newRobots = robots.map((robot) =>
        robot._id === action.robot._id ? { ...action.robot } : { ...robot }
      );
      break;
    default:
      newRobots = [...robots];
  }
  return newRobots;
};

export default robotsReducer;
