import { screen } from "@testing-library/react";
import App from "./App";
import renderWithProviders from "./setupTests";
import { BrowserRouter } from "react-router-dom";

describe("Given an App compoent", () => {
  describe("When it´s rendered", () => {
    test("Then it should display a nav element", () => {
      renderWithProviders(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );

      const title = screen.getByRole("heading", { name: /robots/i });
      expect(title).toBeInTheDocument();
    });
  });
});
