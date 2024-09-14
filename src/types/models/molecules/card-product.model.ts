import { IImage } from "../atoms";

export interface ICardProduct {
  id: string;
  image: IImage;
  name: string;
  price: number;
  priceList: number;
  action?: () => void;
}
