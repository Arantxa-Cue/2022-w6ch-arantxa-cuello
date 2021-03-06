import actionTypes from "./actionsTypes";

export const loadRobotsAction = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
});

export const deleteRobotAction = (id) => ({
  type: actionTypes.deleteRobot,
  id,
});

export const createRobotAction = (robot) => ({
  type: actionTypes.createRobot,
  robot,
});

export const updateRobotAction = (robot) => ({
  type: actionTypes.updateRobot,
  robot,
});

export const loadCurrentRobotAction = (robot) => ({
  type: actionTypes.loadCurrentRobot,
  robot,
});
