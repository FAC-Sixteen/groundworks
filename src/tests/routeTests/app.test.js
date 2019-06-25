const request = require("supertest");
const app = require("../../App.js");

describe("jest is working", () => {
  it("should be showing James", () => {
    expect("James").toBe("James");
  });
});
