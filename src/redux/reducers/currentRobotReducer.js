import actionTypes from "../actions/actionsTypes";

const currentRobotReducer = (robot = {}, action = {}) => {
  let newCurrentRobot;

  if (action.type === actionTypes.loadCurrentRobot) {
    newCurrentRobot = { ...action.robot };
  } else {
    newCurrentRobot = { ...robot };
  }
  return newCurrentRobot;
};

export default currentRobotReducer;
