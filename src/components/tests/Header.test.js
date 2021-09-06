import { Header } from "../Header";

import { render, screen } from "@testing-library/react";

test("renders header", () => {
  render(<Header />);
  const header = screen.getByText(/Rimesfaibles.tech/);
  expect(header).toBeInTheDocument();
});
