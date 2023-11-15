import data from "../../data/courses.json";

//* Numbers Test

const numItems = data.length;

test("number of items = 12", () => {
  expect(numItems).toBe(12);
});

test("number of items to be greater than or equal to 12", () => {
  expect(numItems).toBeGreaterThanOrEqual(12);
});

//* Strings Test

const dataTest = data[0].title;

test("There is the letters 'JS' in this title", () => {
  expect(dataTest).toMatch(/JS/);
});

test("There is the word 'React' in this title", () => {
  expect(dataTest).toContain("React");
});

//* Array Test

const data2 = ["React Native", "React"];

test("The list of courses contains 'React Native' and 'React'", () => {
  expect(["React Native", "React", "Another One"]).toEqual(
    expect.arrayContaining(data2)
  );
});

//* Objects Test

test("The 1st course to have a property 'title'", () => {
  expect(data[0]).toHaveProperty("title");
});

test("The 1st course to have a property 'title' and a value of '31,266'", () => {
  expect(data[0]).toHaveProperty("views", "31,266");
});
