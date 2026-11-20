// Self-check: `node --test lib/calc.test.ts` (Node 24 strips types; no extra deps).
import assert from "node:assert/strict";
import test from "node:test";
import { monthlyTotal, typicalSavings, wholeDollars, yearlyTotal } from "./calc.ts";

// Defaults: Streaming A, Streaming B, Gym, Fitness app, Design tool
const defaults = [1549, 1099, 3900, 1499, 1299];

test("default selection", () => {
  assert.equal(monthlyTotal(defaults), 9346);
  assert.equal(yearlyTotal(defaults), 112152);
  assert.equal(wholeDollars(yearlyTotal(defaults)), 1121);
  assert.equal(typicalSavings(defaults), 83376); // (39 + 15.49 + 14.99) * 12
  assert.equal(wholeDollars(typicalSavings(defaults)), 833);
});

test("fewer than 3 selected uses all of them", () => {
  assert.equal(typicalSavings([1200]), 14400);
  assert.equal(typicalSavings([1200, 299]), 17988);
});

test("empty selection", () => {
  assert.equal(yearlyTotal([]), 0);
  assert.equal(typicalSavings([]), 0);
});

test("all 10 chips", () => {
  const all = [1549, 1099, 799, 1099, 299, 3900, 1200, 1499, 1199, 1299];
  assert.equal(monthlyTotal(all), 13942);
  assert.equal(typicalSavings(all), (3900 + 1549 + 1499) * 12);
});
