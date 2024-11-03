export interface ISelectedGroupValues {
  group: string;
  values: (string | number)[];
}

export interface selectOption {
  value: string;
  label: string;
  isSelected?: boolean;
  [key: string]: string | boolean | number | undefined;
}
