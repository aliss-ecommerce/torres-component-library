import { IButtonColor } from "../atoms";
import { ISelectedGroupValues, selectOption } from"src/types/models";

export interface IGroupButtonBase {
  group: string;
  onSelect?: (valuesGroup: ISelectedGroupValues) => void;
  multiple?: boolean;
  wrapContent?: boolean;
}

export interface IGroupButtonColor extends IGroupButtonBase {
  items: IButtonColor[];
}

export interface IGroupButton extends IGroupButtonBase {
  items: selectOption[];
}

export interface IGroupButtonLinkNext extends IGroupButtonBase {
  items: selectOption[];
  orientation?: "horizontal" | "vertical";
}
