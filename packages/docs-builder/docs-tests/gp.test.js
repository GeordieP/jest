const { makeAdder } = require("./gp.js");

describe("makeAdder", () => {
  test("should add 8", () => {
    const md = `
# Hello from markdown

- From within a test!

\`\`\`
As long as the test passes.
\`\`\`
`;

    const result = makeAdder(8)(10);
    expect(result).toBe(18)
    return Promise.resolve(md);
  });
});