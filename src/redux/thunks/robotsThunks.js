import {
  loadRobotsAction,
  deleteRobotAction,
  createRobotAction,
  updateRobotAction,
  loadCurrentRobotAction,
} from "../actions/actionsCreators";

export const loadRobotsThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL);
  const robots = await response.json();

  dispatch(loadRobotsAction(robots.robots));
};

export const deleteRobotThunk = (id) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/delete/${id}`,
    {
      method: "DELETE",
    }
  );
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

export const updateRobotThunk = (robot) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}${robot.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(robot),
  });
  const updatedRobot = await response.json();

  dispatch(updateRobotAction(updatedRobot));
};

export const loadCurrentRobotThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}${id}`);
  const currentRobot = await response.json();

  dispatch(loadCurrentRobotAction(currentRobot));
};
