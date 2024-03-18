export interface PropsCard {
  id: number;
  title: string;
  image: { path: string; extension: string };
}
export interface PropsGrid {
  comics: PropsCard[];
}
