import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Layouts/Header";

it("checks the profile image in the header", () => {
  render(<Header />);
  const profileImg = screen.getByRole("img");
  expect(profileImg).toBeInTheDocument();
  expect(profileImg).toHaveAttribute("src", "https://robohash.org/guest");
  expect(profileImg).toHaveAttribute("alt", "guest profile");
});

it("checks the post button in the header", () => {
  render(<Header />);
  const postButton = screen.getByTestId("Post button");
  expect(postButton).toBeInTheDocument();
  expect(postButton).toHaveClass("text-green-500");
  expect(postButton).toHaveAttribute("name", "Post button");
});

it("checks the user dropdown in the header", () => {
  render(<Header />);
  const userDropdown = screen.getByTestId("user dropdown");
  const userDropdownButton = screen.getByTestId("user dropdown button");
  expect(userDropdown).toBeInTheDocument();
  expect(userDropdown).toHaveClass("relative");
  expect(userDropdown).toContainElement(userDropdownButton);
});
