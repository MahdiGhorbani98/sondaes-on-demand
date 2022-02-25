import { render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

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
  userEvent.click(checkbox);
  expect(ConfitmBtn).toBeEnabled();

  userEvent.click(checkbox);
  expect(ConfitmBtn).toBeDisabled();
});

test("popover responds on hover", () => {
  render(<SummaryForm />);
  //popover start out hidden
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  //popover appears on mouseover of chackbox lable
  const checkboxLable = screen.getByText(/terms and conditions/i);
  userEvent.hover(checkboxLable);

  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  //popover disappears when we mouse out
  userEvent.unhover(checkboxLable);
  const nullPopoverAgain = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopoverAgain).not.toBeInTheDocument();
});
