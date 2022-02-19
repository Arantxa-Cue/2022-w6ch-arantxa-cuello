import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import Robots from "./robotsComponent";
import renderWithProviders from "../setupTests";

describe("Given a Robots component", () => {
  describe("When it´s rendered", () => {
    test("Then it should display 'Robots'", async () => {
      renderWithProviders(
        <BrowserRouter>
          <Robots />
        </BrowserRouter>
      );
      const robotsText = await screen.findByRole("heading", {
        name: /robots/i,
      });
      expect(robotsText).toBeInTheDocument();
    });
  });
});
