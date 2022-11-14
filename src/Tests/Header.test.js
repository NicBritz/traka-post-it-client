import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Layouts/Header";

test("checks profile image in header", () => {
  render(<Header />);
  expect(screen.getByRole("img")).toBeInTheDocument();
  expect(
    screen.getByRole("img", { src: "https://robohash.org/guest" })
  ).toBeTruthy();
  expect(screen.getByAltText("guest profile")).toBeInTheDocument();
});
