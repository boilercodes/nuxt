import { describe, expect, it } from "vitest";

describe("basic", () => {
  it("setup successful", () => {
    expect("1").toMatch("1");
  });
});
