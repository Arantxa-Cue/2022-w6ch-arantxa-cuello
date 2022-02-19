import actionTypes from "../actions/actionsTypes";
import robotsReducer from "./robotsReducer";

describe("Given a robotsReducer function", () => {
  describe("When it receives two robots and a load action with two robots", () => {
    test("Then it should return the two robots in the action", () => {
      const robots = [
        {
          id: 1,
          name: "coco",
        },
        {
          id: 2,
          name: "mery",
        },
      ];
      const newRobots = [
        {
          id: 3,
          name: "pepe",
        },
        {
          id: 4,
          name: "nana",
        },
      ];
      const action = {
        type: actionTypes.loadRobots,
        robots: newRobots,
      };
      const newRobotsResults = robotsReducer(robots, action);

      expect(newRobotsResults).toEqual(newRobots);
    });
  });
  describe("When it doesn't receive either a state or an action", () => {
    test("Then it should return an empty robots list", () => {
      const newRobots = robotsReducer();
      expect(newRobots).toHaveLength(0);
    });
  });
});
