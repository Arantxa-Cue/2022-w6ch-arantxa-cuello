import {
  loadRobotsAction,
  deleteRobotAction,
  createRobotAction,
} from "../actions/actionsCreators";

export const loadRobotsThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL);
  const robots = await response.json();

  dispatch(loadRobotsAction(robots.robots));
};

export const deleteRobotThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(deleteRobotAction(id));
  }
};

export const createRobotThunk = (robot) => async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(robot),
  });
  const newRobot = await response.json();

  dispatch(createRobotAction(newRobot));
};
