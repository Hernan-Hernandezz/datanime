import { describe, test, expect } from "vitest";
import topAnime from "../src/utils/api";

describe("API tests", () => {
  test("response in object", () => {
    const response = topAnime;
    expect(typeof response).toBe("object");
  });
});
