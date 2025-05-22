import * as assert from "node:assert";
import test, { describe } from "node:test";
import { multiply, sum } from "./math.js";

describe("math", () => {
  test("sum", () => {
    assert.strictEqual(sum(1, 2, 3), 6);
  });

  test("multiply", () => {
    assert.strictEqual(multiply(1, 2, 3), 6);
  });
});
