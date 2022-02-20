import { screen } from "@testing-library/react";
import App from "./App";
import renderWithProviders from "./setupTests";
import { BrowserRouter } from "react-router-dom";

describe("Given an App compoent", () => {
  describe("When it´s rendered", () => {
    test("Then it should display a heading element", () => {
      renderWithProviders(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );

      const title = screen.getByRole("heading", {
        name: /Robots/i,
        name: /Robots list/i,
      });
      expect(title).toBeInTheDocument();
    });
  });
});
