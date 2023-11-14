import data from "../../data/courses.json";

const numItems = data.length;

test("number of items = 12", () => {
  expect(numItems).toBe(12);
});

test("number of items to be greater than or equal to 12", () => {
  expect(numItems).toBeGreaterThanOrEqual(12);
});

const dataTest = data[0].title;

test("There is the letters 'JS' in this title", () => {
  expect(dataTest).toMatch(/JS/);
});

test("There is the word 'React' in this title", () => {
  expect(dataTest).toContain("React");
});
