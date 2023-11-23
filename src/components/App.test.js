import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "./App";

test("renders the text 'Course List'", () => {
  render(<App />);
  const textDisplay = document.getElementById("app-atag").innerHTML;
  expect(textDisplay).toMatch(/Course List/i);
  expect(textDisplay.length).toBeGreaterThanOrEqual(11);
});

// When the following test is run, a folder called __snapshots__ will be created with
// a file called App.test.js.snap, where the snapshot will be visible. When the component
// App.js is changed and another test is run, the snapshot will detect the changes and
// throw an error. You can use "u" for update in the terminal console to sync your changes

test("App snapshot test", () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
