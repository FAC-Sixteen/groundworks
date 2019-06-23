import { render, ByText } from "@testing-library/react";
import React from "react";
import AcceptDecline from "../../components/AccectDeclineButtons/AcceptDecline.js";

const AcceptDeclineComponent = render(<AcceptDecline />);

describe("Accept Decline component exists", () => {
  it("should return true", () => {
    expect(AcceptDeclineComponent).toBeTruthy();
  });
});

describe("Accept Button exists", () => {
  const AcceptButton = document.body.getElementsByClassName(
    "AcceptDecline--AcceptButton"
  );
  it("should return true", () => {
    expect(AcceptButton).toBeTruthy();
  });
});

describe("Decline Button exists", () => {
  const DeclineButton = document.body.getElementsByClassName(
    "AcceptDecline--DeclineButton"
  );
  it("should return true", () => {
    expect(DeclineButton).toBeTruthy();
  });
});
