import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders brand and hero name", () => {
  render(<App />);
  expect(screen.getAllByText(/Kartik Codes/i).length).toBeGreaterThan(0);
  expect(screen.getByRole("heading", { level: 1, name: /Kartik Rohilla/i })).toBeInTheDocument();
});

test("renders experience companies from the resume", () => {
  render(<App />);
  expect(screen.getByText(/Sopra Steria/i)).toBeInTheDocument();
  expect(screen.getByText(/IKS Health/i)).toBeInTheDocument();
  expect(screen.getByText(/NeoSOFT/i)).toBeInTheDocument();
  expect(screen.getByText(/Mind IT Systems/i)).toBeInTheDocument();
  expect(screen.getByText(/Concentrix/i)).toBeInTheDocument();
});

test("renders resume projects and contact email", () => {
  render(<App />);
  expect(screen.getAllByText(/Sujata Inventory Management/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/Hourhealth/i)).toBeInTheDocument();
  expect(screen.getByText(/kartik.codes1998@gmail.com/i)).toBeInTheDocument();
});
