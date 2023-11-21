import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "./App";

test("renders the text 'Course List'", () => {
  render(<App />);
  const textDisplay = document.getElementById("app-atag").innerHTML;
  expect(textDisplay).toMatch(/Course List/i);
  expect(textDisplay.length).toBeGreaterThanOrEqual(11);
});

test("App snapshot test", () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
