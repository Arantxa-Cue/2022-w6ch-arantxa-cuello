import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./navigationComponent";

describe("Given a Navigation component", () => {
  describe("When it´s rendered", () => {
    test("Then it should display a link with 'Robots'", () => {
      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      );

      const link = screen.getByRole("link", { name: /Robots/i });

      expect(link).toBeInTheDocument();
    });
  });
});
