import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the text 'Courses'", () => {
  render(<App />);
  const textDisplay = document.getElementById("app-atag").innerHTML;
  expect(textDisplay).toMatch(/Courses/i);
});
