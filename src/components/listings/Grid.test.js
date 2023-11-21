import data from "../../data/courses.json";

//* Numbers Tests

const numItems = data.length;

describe("Number Tests", () => {
  test("number of items = 12", () => {
    expect(numItems).toBe(12);
  });
  test("number of items to be greater than or equal to 10", () => {
    expect(numItems).toBeGreaterThanOrEqual(10);
  });
});

//* Strings Tests

const dataTest = data[0].title;

describe("String Tests", () => {
  test("There is the letters 'JS' in this title", () => {
    expect(dataTest).toMatch(/JS/);
  });
  test("There is the word 'React' in this title", () => {
    expect(dataTest).toContain("React");
  });
});

//* Arrays & Objects Tests

const data2 = ["React Native", "React"];

describe("Arrays & Objects Tests", () => {
  test("The list of courses contains 'React Native' and 'React'", () => {
    expect(["React Native", "React", "Another One"]).toEqual(
      expect.arrayContaining(data2)
    );
  });
  test("The 1st course to have a property 'title'", () => {
    expect(data[0]).toHaveProperty(
      "title",
      "Building an App with ReactJS and MeteorJS"
    );
  });
  test("The 1st course to have a property 'title' and a value of '31,266'", () => {
    expect(data[0]).toHaveProperty("views", "31,266");
  });
});
