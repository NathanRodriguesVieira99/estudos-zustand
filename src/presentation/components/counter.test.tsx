import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./counter";

const renderCounter = () => {
  const r = render(<Counter />);
  return r;
};

describe("<Counter />", () => {
  it("should render initial state of 0", async () => {
    renderCounter();

    expect(await screen.findByText("0")).toBeVisible();
    expect(await screen.findByRole("button", { name: "+" })).toBeVisible();
  });
  it("should increment count by clicking a button", async () => {
    const user = userEvent.setup();

    renderCounter();

    await user.click(await screen.findByRole("button", { name: "+" }));

    expect(await screen.findByText("1")).toBeVisible();
  });

  it("should throw error when try to decrease to 0", async () => {
    const user = userEvent.setup();

    renderCounter();

    await user.click(await screen.findByRole("button", { name: "-" }));

    expect(await screen.findByText("0")).toBeVisible();
  });
  it("should reset count", async () => {
    const user = userEvent.setup();

    renderCounter();

    await user.click(await screen.findByRole("button", { name: "+" }));

    await user.click(await screen.findByRole("button", { name: "reset" }));

    expect(await screen.findByText("0")).toBeVisible();
  });
});
