import App from "../App";
import data from "../utils/data";
import { render, screen } from "@testing-library/react";

describe("Linktree Test", () => {
  it("should be render Title and Subtitle", () => {
    const { title, subtitle } = data;
    render(<App />);

    const titleElement = screen.getByRole("heading", { level: 1, name: title });
    const subtitleElement = screen.getByRole("heading", {
      level: 2,
      name: subtitle,
    });

    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
  });

  it("should be render links", () => {
    const { links } = data;
    const firstElement = 0;
    const lastElement = links.length - 1;
    render(<App />);

    const firstLinkElement = screen.getByRole("link", {
      name: links[firstElement].text,
    });
    const lastLinkElement = screen.getByRole("link", {
      name: links[lastElement].text,
    });

    expect(firstLinkElement).toBeInTheDocument();
    expect(lastLinkElement).toBeInTheDocument();
  });
});
