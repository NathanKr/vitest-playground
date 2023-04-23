import { getQueriesForElement } from "@testing-library/react";
import ReactDOM from "react-dom";
import App from "../App";

describe("Todos test with testing-library", () => {
  const root = document.createElement("div");
  const { getByText } = getQueriesForElement(root);
  beforeAll(() => {
    ReactDOM.render(<App />, root);
  });

  test("Todos text exist", () => {
    // --- this is using testing-library/dom
    expect(getByText("Hello")).not.toBeNull();
  });
});
