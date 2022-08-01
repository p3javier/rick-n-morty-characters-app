import React from "react";
import Login from "./Login";
import { render, screen } from "@testing-library/react";
describe("Login page tests", () => {
  test("The component loads without errors", () => {
    render(<Login />);
  });
});
