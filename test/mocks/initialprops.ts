import {
  Characters,
  DateElement,
  ImageT,
  Price,
  Series,
  Title,
} from "dh-marvel/features/marvel/comics.type";

export const PropsInit = {
  initialComics: [],
  total: 12,
  page: 12,
};

export interface Comics {
  id: number;
  digitalId: number;
  title: Title;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: any[];
  resourceURI: string;
  urls: URL[];
  series: Series;
  variants: Series[];
  collections: any[];
  collectedIssues: any[];
  dates: DateElement[];
  prices: Price[];
  thumbnail: ImageT;
  images: ImageT[];
  creators: Characters;
  characters: Characters;
  stories: Characters;
  events: Characters;
  oldPrice: number | string;
  price: number | string;
}
