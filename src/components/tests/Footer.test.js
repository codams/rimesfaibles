import { Footer } from "../Footer";

import { render, screen } from "@testing-library/react";

test("renders footer", () => {
  render(<Footer />);
  const githubLinkElement = screen.getByText(/Editer sur Github/i);
  expect(githubLinkElement).toBeInTheDocument();
});
