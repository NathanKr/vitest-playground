import {render,  screen } from "@testing-library/react";
import App from "../App";

describe("Todos test with testing-library", () => {
  beforeAll(() => {
    render(<App/>)
  });
  
  test('Todos text exist',() =>{
    expect(screen.getByText("Hello")).not.toBeNull()
  })
});