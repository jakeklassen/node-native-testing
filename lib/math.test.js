import * as assert from "node:assert";
import test from "node:test";
import { sum } from "./math.js";

test("sum", () => {
  assert.strictEqual(sum(1, 2, 3), 6);
});
