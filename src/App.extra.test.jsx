import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import App from "./App";

describe("App - additional behaviors", () => {
  beforeEach(() => {
    cleanup();
  });

  afterEach(() => {
    cleanup();
  });

  it("does not add blank or whitespace-only todos", () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const addBtn = screen.getByText(/Add Todo/i);

    // Baseline count by number of delete buttons present
    const initialCount = screen.getAllByText("🗑️").length;

    // Try to add spaces
    fireEvent.change(input, { target: { value: "   " } });
    fireEvent.click(addBtn);

    const afterCount = screen.getAllByText("🗑️").length;
    expect(afterCount).toBe(initialCount);
  });

  it("clears the input after successfully adding a todo", () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const addBtn = screen.getByText(/Add Todo/i);

    fireEvent.change(input, { target: { value: "Write more tests" } });
    fireEvent.click(addBtn);

    // Input should be cleared
    expect(input.value).toBe("");
    // New todo should be present
    expect(screen.getByText("Write more tests")).toBeInTheDocument();
  });

  it("updates stats badge correctly when toggling completion", () => {
    render(<App />);

    // Initially 2/3 completed (from default state)
    expect(screen.getByText(/2\/3 completed/i)).toBeInTheDocument();

    // Toggle the incomplete todo (Deploy to Production)
    const toggle = screen.getByLabelText(/Mark Deploy to Production as complete/i);
    fireEvent.click(toggle);

    expect(screen.getByText(/3\/3 completed/i)).toBeInTheDocument();

    // Toggle back
    const toggleBack = screen.getByLabelText(/Mark Deploy to Production as incomplete/i);
    fireEvent.click(toggleBack);
    expect(screen.getByText(/2\/3 completed/i)).toBeInTheDocument();
  });

  it("exposes correct aria-labels for toggle and delete buttons", () => {
    render(<App />);

    // Toggle button has descriptive aria-label
    expect(
      screen.getByLabelText(/Mark Deploy to Production as complete/i)
    ).toBeInTheDocument();

    // Delete button has descriptive aria-label
    expect(
      screen.getByLabelText(/Delete Deploy to Production/i)
    ).toBeInTheDocument();
  });

  it("shows default footer values when env is not provided", () => {
    render(<App />);
    expect(screen.getByText(/Version:\s*1.0.0/i)).toBeInTheDocument();
    expect(screen.getByText(/Commit:\s*dev/i)).toBeInTheDocument();
  });
});
