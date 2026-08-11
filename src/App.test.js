import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders brand and hero name", () => {
  render(<App />);
  expect(screen.getAllByText(/Kartik Codes/i).length).toBeGreaterThan(0);
  expect(screen.getByRole("heading", { level: 1, name: /Kartik Rohilla/i })).toBeInTheDocument();
});

test("renders experience companies", () => {
  render(<App />);
  expect(screen.getByText(/Sopra Steria/i)).toBeInTheDocument();
  expect(screen.getByText(/IKS Health/i)).toBeInTheDocument();
  expect(screen.getByText(/Mind IT Systems/i)).toBeInTheDocument();
});
