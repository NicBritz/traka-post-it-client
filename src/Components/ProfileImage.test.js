import { render, screen } from "@testing-library/react";
import ProfileImage from "./ProfileImage";

test("profile image renders", () => {
  render(<ProfileImage />);
  const imgElement = screen.getByRole("img");
  expect(imgElement).toBeInTheDocument();
});

test("small profile image has correct size classes", () => {
  render(<ProfileImage small={true} />);
  const imgElement = screen.getByRole("img");
  expect(imgElement).toHaveClass("h-10 w-10");
});

test("profile image src attribute", () => {
  render(<ProfileImage />);
  const imgElement = screen.getByRole("img");
  expect(imgElement).toHaveAttribute("src");
  const srcValue = imgElement.getAttribute("src");
  expect(srcValue).toBe("https://robohash.org/guest");
});

test("profile image alt attribute", () => {
  render(<ProfileImage />);
  const imgElement = screen.getByRole("img");
  expect(imgElement).toHaveAttribute("alt");
  const altValue = imgElement.getAttribute("alt");
  expect(altValue).toBe("guest profile");
});
