import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import RobotsPage from "./RobotsPage";
import store from "../../redux/store";

describe("Given a RobotsPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should display a heading with 'Robots list'", () => {
      render(
        <Provider store={store}>
          <RobotsPage />
        </Provider>
      );

      const heading = screen.getByRole("heading", { name: /robots list/i });

      expect(heading).toBeInTheDocument();
    });
  });
});
