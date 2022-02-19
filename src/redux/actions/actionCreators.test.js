import { loadRobotsAction } from "./actionsCreators";
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
