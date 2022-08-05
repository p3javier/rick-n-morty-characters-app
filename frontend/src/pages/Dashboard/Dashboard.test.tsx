import React from "react";
import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import { store } from "../../redux/store";

import { BrowserRouter } from "react-router-dom";

import Dashboard from "./Dashboard";

describe("Dashboard page tests", () => {
  const Component = (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
  afterEach(() => {
    jest.restoreAllMocks();
  });
  describe("Unit tests suite", () => {
    test("The Dashboard renders without crashing", () => {
      render(Component, { wrapper: BrowserRouter });
    });

    test("There is a header with 'List Of Characters' value", () => {
      render(Component, { wrapper: BrowserRouter });

      const header = screen.getByRole("heading");
      expect(header).toHaveTextContent(/^List Of Characters$/);
    });

    test("There is a list in the page", () => {
      render(Component, { wrapper: BrowserRouter });
      const list = screen.getByRole("list");
      expect(list).toBeInTheDocument();
    });
  });
});
