import { render, screen } from "@testing-library/react";
import Vote from "./Vote";

test("vote component renders", () => {
  const testPost = { votes: 10 };
  render(<Vote post={testPost} />);
  const vote = screen.getByTestId("vote component");
  expect(vote).toBeInTheDocument();
});

test("vote component renders votes", () => {
  const testPost = { votes: 10 };
  render(<Vote post={testPost} />);
  const vote = screen.getByTestId("votes");
  expect(vote).toHaveTextContent("10");
});
