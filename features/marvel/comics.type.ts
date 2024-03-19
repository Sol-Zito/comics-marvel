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
  stock: number;
}

export enum Title {
  MarvelPreviews2017 = "Marvel Previews (2017)",
  MarvelPreviews2017Present = "Marvel Previews (2017 - Present)",
}
export interface Series {
  resourceURI: string;
  name: Title;
}
export interface DateElement {
  type: string;
  date: string;
}

export interface Price {
  type: string;
  price: number;
}
export interface Characters {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}
export interface ImageT {
  path: string;
  extension: string;
}
export interface Item {
  resourceURI: string;
  name: string;
  role?: string;
  type?: string;
}
