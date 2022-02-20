import actionTypes from "./actionsTypes";

export const loadRobotsAction = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
});

export const deleteRobotAction = (id) => ({
  type: actionTypes.deleteRobot,
  id,
});
