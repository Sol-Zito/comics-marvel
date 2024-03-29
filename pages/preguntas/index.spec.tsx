import { render, screen } from "@testing-library/react";
import { faqsData } from "dh-marvel/components/faqs/faqsData";
import Index from "dh-marvel/pages/preguntas/index.page";

describe("FaqsPage", () => {
  describe("when rendering default", () => {
    it("should render the title", () => {
      render(<Index faqs={faqsData} />);
      const title = screen.getByText("Preguntas Frecuentes");
      expect(title).toBeInTheDocument();
    });
  });
  describe("when rendering", () => {
    it("should render ask", () => {
      render(<Index faqs={faqsData} />);
      const ask = screen.getByText("¿Cuántos comics tienen?");
      expect(ask).toBeInTheDocument();
    });
  });
  describe("when rendering", () => {
    it("should render ask", () => {
      render(<Index faqs={faqsData} />);
      const ask = screen.getByText("¿Se puede reservar nuevos lanzamientos?");
      expect(ask).toBeInTheDocument();
    });
  });
});
