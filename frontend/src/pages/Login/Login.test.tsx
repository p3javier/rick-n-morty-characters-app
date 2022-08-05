import React from "react";
import Login from "./Login";
import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter } from "react-router-dom";

describe("Login page tests", () => {
  const Component = (
    <Provider store={store}>
      <Login setToken={(userToken: { token: string }) => undefined} />
    </Provider>
  );
  test("The component loads without errors", () => {
    render(Component, { wrapper: BrowserRouter });
  });

  test("There is an email input", () => {
    render(Component, { wrapper: BrowserRouter });
    const email = screen.getByRole("textbox");
    expect(email).toHaveAttribute("type", "email");
  });

  test("There is an password input", () => {
    render(Component, { wrapper: BrowserRouter });

    const password = screen.getByText("Password");

    expect(password).toBeInTheDocument();
  });

  test("There is an email input", () => {
    render(Component, { wrapper: BrowserRouter });
    const email = screen.getByRole("button");
    expect(email).toHaveAttribute("type", "submit");
  });
});
