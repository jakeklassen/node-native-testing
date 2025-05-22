import * as assert from "node:assert";
import { describe, it } from "node:test";
import { multiply, sum } from "./math.js";

describe("math", () => {
  describe("sum", () => {
    it("adds 1 + 2 to equal 3", () => {
      assert.strictEqual(sum(1, 2), 3);
    });
  });

  describe("multiply", () => {
    it("multiplies 2 * 3 to equal 6", () => {
      assert.strictEqual(multiply(2, 3), 6);
    });
  });
});
