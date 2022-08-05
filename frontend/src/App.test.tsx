import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import { BrowserRouter } from "react-router-dom";

describe("App component tests", () => {
  const Component = (
    <Provider store={store}>
      <App />
    </Provider>
  );
  test("The App component renders without crashing", () => {
    render(Component, { wrapper: BrowserRouter });
  });

  describe("Unit tests", () => {
    test("There is a navbar component", () => {
      render(Component, { wrapper: BrowserRouter });
      const navBar = screen.getByRole("navigation");
      expect(navBar).toBeInTheDocument();
    });
  });
});
