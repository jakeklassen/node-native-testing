import * as assert from "node:assert";
import { describe, it } from "node:test";
import { sum } from "./math.js";

describe("sum", () => {
  it("adds 1 + 2 to equal 3", () => {
    assert.strictEqual(sum(1, 2), 3);
  });
});
