describe("gp", () => {
  test("testsomething", () => {
    const expected = "test123";
    const result = "test123";

    expect(result).toBe(expected);

    // TODO(gp): Returning here prints a warning "it and test must return either a promise or undefined"
    // where is this message coming from? might point us in the right direction
    // return "HELLO WORLD";

    return Promise.resolve("HELLO WORLD");
  });
});