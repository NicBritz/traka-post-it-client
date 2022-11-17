import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import globalReducer from "../Utils/reducer";

const rootReducer = combineReducers({ globalReducer });
const store = createStore(rootReducer);

it("checks the profile image in the header", () => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
  const profileImg = screen.getByRole("img");
  expect(profileImg).toBeInTheDocument();
  expect(profileImg).toHaveAttribute("src", "https://robohash.org/guest");
  expect(profileImg).toHaveAttribute("alt", "guest profile");
});

it("checks the user dropdown in the header", () => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
  const userDropdown = screen.getByTestId("user dropdown");
  const userDropdownButton = screen.getByTestId("user dropdown button");
  expect(userDropdown).toBeInTheDocument();
  expect(userDropdown).toHaveClass("relative");
  expect(userDropdown).toContainElement(userDropdownButton);
});
