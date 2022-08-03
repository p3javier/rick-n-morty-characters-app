import React from "react";
import Login from "./Login";
import { render, screen } from "@testing-library/react";
import { useToken } from "../../hooks/useToken";
describe("Login page tests", () => {
  test("The component loads without errors", () => {
    const { token, setToken } = useToken();
    render(<Login setToken={setToken} />);
  });
});
