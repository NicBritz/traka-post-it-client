import { render, screen } from "@testing-library/react";
import IconButton from "./IconButton";

test("icon button renders", () => {
  render(<IconButton />);
  const iconButton = screen.getByTestId("text button");
  expect(iconButton).toBeInTheDocument();
});

test("button renders text", () => {
  render(<IconButton />);
  const iconButton = screen.getByTestId("text button");
  expect(iconButton).toHaveTextContent("text");
});
