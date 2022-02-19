import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Robot from "./robotComponent";

describe("Given a Robot Component", () => {
  describe("When it receives a robot name 'coco'", () => {
    test("Then it should display a heading with 'Coco", () => {
      const robot = {
        name: "Coco",
      };

      render(
        <BrowserRouter>
          <Robot robot={robot} />
        </BrowserRouter>
      );

      const heading = screen.getByRole("heading", { name: robot.name });
      expect(heading).toBeInTheDocument();
    });
  });
});
