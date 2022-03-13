import { screen, render } from "../../../test-utils/testing-library-utils";
import Option from "../Option";
import { OrderDetailsProvider } from "../../../contexts/OrderDetails";

test("display image for each scoop option from server", async () => {
  render(<Option optionType="scoops" />);

  //find imgs
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  //confirm alt text of images
  const altText = scoopImages.map((e) => e.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("display image for each topping from server", async () => {
  render(<Option optionType="topping" />, { wrapper: OrderDetailsProvider });

  //find imgs
  const toppingImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });
  expect(toppingImages).toHaveLength(3);

  //confirm alt text of images
  const altText = toppingImages.map((e) => e.alt);
  expect(altText).toEqual([
    "M&Ms topping",
    "Hot fudge topping",
    "Peanut butter cups topping",
  ]);
});
