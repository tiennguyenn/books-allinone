import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ClockContainer from "./ClockContainer";

describe("ClockContainer component", () => {
  it("should render a clock", () => {
    render(<ClockContainer />);
    const result = screen.getAllByTestId("clock");
    expect(result.length).toBe(1);
  });
});
