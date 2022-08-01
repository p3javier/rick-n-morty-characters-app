import React from "react";
import { render } from "@testing-library/react";
import NotFound from "./NotFound";

describe("NotFound (404 page) tests", () => {
  test("renders without errors", () => {
    render(<NotFound />);
  });
});
