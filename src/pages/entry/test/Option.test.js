import { screen, render } from "@testing-library/react";
import Option from "../Option";

test("display image for each scoop option from server", async () => {
  render(<Option optionType="scoops" />);

  //find imgs
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  //confirm alt text of images
  const altText = scoopImages.map((e) => e.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});
