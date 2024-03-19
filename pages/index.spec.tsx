import { render, screen } from "@testing-library/react";
import Index from "dh-marvel/pages/index.page";
import { PropsInit } from "dh-marvel/test/mocks/initialprops";

describe("IndexPage", () => {
  describe("when rendering default", () => {
    it("should render the title", () => {
      render(
        <Index
          page={PropsInit.page}
          total={PropsInit.total}
          initialComics={PropsInit.initialComics}
        />
      );
      const title = screen.getByText("Sample");
      expect(title).toBeInTheDocument();
    });
  });
});
