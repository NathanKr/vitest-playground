// --- strange because i use global : true in vite.config.ts
import { expect, test } from "vitest";
import { sum } from "../lib/utils";

for (let index = 0; index < 2; index++) {
  test("1+2 is 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
}
