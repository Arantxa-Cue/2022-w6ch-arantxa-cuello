import {
  loadRobotsAction,
  deleteRobotAction,
} from "../actions/actionsCreators";

export const loadRobotsThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL);
  const robots = await response.json();
  console.log(robots.robots);
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
