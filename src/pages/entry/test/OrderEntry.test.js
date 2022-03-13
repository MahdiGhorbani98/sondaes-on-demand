import {
  screen,
  render,
  waitFor,
} from "../../../test-utils/testing-library-utils";
import OrederEntry from "../OrederEntry";
import { server } from "../../../mocks/server";
import { rest } from "msw";
import { OrderDetailsProvider } from "../../../contexts/OrderDetails";

test("handle error for topping and scoop", async () => {
  server.resetHandlers(
    rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
      res(ctx.status(500));
    })
  );

  server.resetHandlers(
    rest.get("http://localhost:3030/topping", (req, res, ctx) => {
      res(ctx.status(500));
    })
  );

  render(<OrederEntry />);

  await waitFor(async () => {
    const alert = await screen.findAllByRole("alert");
    expect(alert).toHaveLength(2);
  });
});
