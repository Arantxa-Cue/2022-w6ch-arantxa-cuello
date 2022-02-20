import {
  loadRobotsAction,
  deleteRobotAction,
  createRobotAction,
} from "./actionsCreators";
import actionTypes from "./actionsTypes";

describe("Given a loadRobotsAction function", () => {
  describe("When it receives robots 'coco' and 'mary'", () => {
    test("Then it should return a load action with these robots inside", () => {
      const robots = [
        {
          id: 1,
          name: "coco",
        },
        { id: 2, name: "mery" },
      ];
      const expectedAction = {
        type: actionTypes.loadRobots,
        robots,
      };

      const action = loadRobotsAction(robots);
      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a deleteRobotAction function", () => {
  describe("When it receives an id 3", () => {
    test("Then it should return an action with delete type and id 3", () => {
      const id = 3;
      const expectedAction = {
        type: actionTypes.deleteRobot,
        id,
      };

      const action = deleteRobotAction(id);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a createRobotAction function", () => {
  describe("When it receives a robot named 'Emily'", () => {
    test("Then it should return a create action with the robot Emily", () => {
      const robot = {
        id: 1,
        name: "Emily",
      };
      const expectedAction = {
        type: actionTypes.createRobot,
        robot,
      };

      const action = createRobotAction(robot);

      expect(action).toEqual(expectedAction);
    });
  });
});
