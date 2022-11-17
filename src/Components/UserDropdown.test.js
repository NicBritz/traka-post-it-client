import { render, screen } from "@testing-library/react";
import UserDropdown from "./UserDropdown";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import globalReducer from "../Utils/reducer";

const rootReducer = combineReducers({ globalReducer });
const store = createStore(rootReducer);

test("user dropdown component renders", () => {
  render(
    <Provider store={store}>
      <UserDropdown />
    </Provider>
  );
  const userDropdown = screen.getByTestId("user dropdown");
  expect(userDropdown).toBeInTheDocument();
  expect(userDropdown).toHaveTextContent("guest");
});

test("user dropdown displays a username", () => {
  render(
    <Provider store={store}>
      <UserDropdown />
    </Provider>
  );
  const userDropdown = screen.getByTestId("user dropdown");
  expect(userDropdown).toHaveTextContent("guest");
});

test("user dropdown has a button", () => {
  render(
    <Provider store={store}>
      <UserDropdown />
    </Provider>
  );
  const dropdownButton = screen.getByTestId("user dropdown button");
  expect(dropdownButton).toBeInTheDocument();
});
