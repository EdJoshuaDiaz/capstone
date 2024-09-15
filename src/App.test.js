import { fireEvent, render, screen } from "@testing-library/react";
import Reservation from "./Components/Reservation/Reservation";

describe("Reservation Form", () => {
  test("Test First Name", () => {
    const fNameValue = "Juan";
    const handleSubmit = jest.fn();
    render(<Reservation onSubmit={handleSubmit} />);

    const fName = screen.getByLabelText(/First Name/);
    fireEvent.change(fName, { target: { value: fNameValue } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).not.toHaveBeenCalled();
  });

  test("Test Last Name", () => {
    const lNameValue = "Cruz";
    const handleSubmit = jest.fn();
    render(<Reservation onSubmit={handleSubmit} />);

    const fName = screen.getByLabelText(/Last Name/);
    fireEvent.change(fName, { target: { value: lNameValue } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).not.toHaveBeenCalled();
  });
});
