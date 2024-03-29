import { render, screen } from "@testing-library/react";
import ComicCheckout from "./ComicCheckout";
import { Comics } from "dh-marvel/features/marvel/comics.type";

const comicMock: Comics = {
  id: 82967,
  digitalId: 0,
  title: "Marvel Previews (2017)",
  issueNumber: 0,
  variantDescription: "",
  description: "",
  modified: "2019-11-07T08:46:15-0500",
  isbn: "",
  upc: "75960608839302811",
  diamondCode: "",
  ean: "",
  issn: "",
  format: "",
  pageCount: 112,
  textObjects: [],
  resourceURI: "http://gateway.marvel.com/v1/public/comics/82967",
  urls: [],
  series: { resourceURI: "", name: "" },
  variants: [],
  collections: [],
  collectedIssues: [],
  dates: [],
  prices: [],
  thumbnail: {
    path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    extension: "jpg",
  },
  images: [],
  creators: {
    available: 1,
    collectionURI: "http://gateway.marvel.com/v1/public/comics/82967/creators",
    items: [],
    returned: 1,
  },
  characters: {
    available: 0,
    collectionURI:
      "http://gateway.marvel.com/v1/public/comics/82967/characters",
    items: [],
    returned: 0,
  },
  stories: {
    available: 2,
    collectionURI: "http://gateway.marvel.com/v1/public/comics/82967/stories",
    items: [],
    returned: 2,
  },
  events: {
    available: 0,
    collectionURI: "http://gateway.marvel.com/v1/public/comics/82967/events",
    items: [],
    returned: 0,
  },
  stock: 2,
  oldPrice: "89",
  price: "90",
};

describe("comic", () => {
  describe("when rendering default", () => {
    it("should render the title", () => {
      render(<ComicCheckout {...comicMock} />);
      const title = screen.getByText("Marvel Previews (2017)...");
      expect(title).toBeInTheDocument();
    });
  });
  describe("when rendering price", () => {
    it("should render the price", () => {
      render(<ComicCheckout {...comicMock} />);
      const price = screen.getByText("Price: 90");
      expect(price).toBeInTheDocument();
    });
  });
});
