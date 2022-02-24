import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("initial conditions", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();

  const ConfitmBtn = screen.getByRole("button", { name: /confirm order/i });
  expect(ConfitmBtn).toBeDisabled();
});

test("checking checkbox enables ConfitmBtn and unChecking disables ConfitmBtn", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const ConfitmBtn = screen.getByRole("button", { name: /confirm order/i });
  fireEvent.click(checkbox);
  expect(ConfitmBtn).toBeEnabled();

  fireEvent.click(checkbox);
  expect(ConfitmBtn).toBeDisabled();
});
