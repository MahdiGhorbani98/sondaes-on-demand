import { render, screen } from "../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import Option from "../Option";

test("update scoop subtotal when scoops change", async () => {
  render(<Option optionType="scoops" />);

  // Subtotal starts out $0.00

  const scoopSubtotal = screen.getByText("Scoops total: $", { exact: false });
  expect(scoopSubtotal).toHaveTextContent("0.00");

  // update vanilla scoop to 1 and check the subtotal

  // const vanillaInput = await screen.findByRole("spinbutton", {
  //   name: "Vanilla",
  // });
  const vanillaInput = await screen.findByLabelText("Vanilla");
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "1");
  expect(scoopSubtotal).toHaveTextContent("2.00");

  // update chocolate scoop to 2 and check the subtotal

  // const chocolateInput = await screen.findByRole("spinbutton", {
  //   name: "Chocolate",
  // });
  const chocolateInput = await screen.findByLabelText("Chocolate");
  userEvent.clear(chocolateInput);
  userEvent.type(chocolateInput, "2");
  expect(scoopSubtotal).toHaveTextContent("6.00");
});

test("update topping subtotal when tops checked", async () => {
  render(<Option optionType="toppings" />);

  // default topping subtotal = $0.0
  const toppingSubtotal = screen.getByText("Toppings total: ", {
    exact: false,
  });
  expect(toppingSubtotal).toHaveTextContent("0.00");

  // when tick one of topping , update topping subtotal
  const CherriesCheckbox = await screen.findByRole("checkbox", {
    name: /Cherries/i,
  });
  userEvent.click(CherriesCheckbox);
  expect(toppingSubtotal).toHaveTextContent("1.50");

  // click two boxes more , update topping subtotal
  const HotFudgeCheckbox = await screen.findByRole("checkbox", {
    name: /Hot Fudge/i,
  });
  userEvent.click(HotFudgeCheckbox);
  expect(toppingSubtotal).toHaveTextContent("3.00");

  // Tick one of the boxes off, update topping subtotal
  userEvent.click(HotFudgeCheckbox);
  expect(toppingSubtotal).toHaveTextContent("1.50");
});
