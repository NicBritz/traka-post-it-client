import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import Header from "../Layouts/Header";
import { combineReducers, createStore } from "redux";
import globalReducer from "../Utils/reducer";

const rootReducer = combineReducers({ globalReducer });
const store = createStore(rootReducer);

beforeEach(() => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
});

it("checks the profile image in the header", () => {
  expect(1).toBe(1);
  const profileImg = screen.getByRole("img");
  expect(profileImg).toBeInTheDocument();
  expect(profileImg).toHaveAttribute("src", "https://robohash.org/guest");
  expect(profileImg).toHaveAttribute("alt", "guest profile");
});

it("checks the post button in the header", () => {
  const postButton = screen.getByTestId("Post button");
  expect(postButton).toBeInTheDocument();
  expect(postButton).toHaveClass("text-green-500");
  expect(postButton).toHaveAttribute("name", "Post button");
});

it("checks the user dropdown in the header", () => {
  const userDropdown = screen.getByTestId("user dropdown");
  const userDropdownButton = screen.getByTestId("user dropdown button");
  expect(userDropdown).toBeInTheDocument();
  expect(userDropdown).toHaveClass("relative");
  expect(userDropdown).toContainElement(userDropdownButton);
});
