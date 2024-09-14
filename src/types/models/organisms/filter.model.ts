import { Filter, FilterConfs, FiltersChange } from "torres-common";

export type IFilter = Filter;

export type IFilterChange = FiltersChange;

export type IFilterConfs = {
  config: FilterConfs;
  change?: (value: IFilterChange) => void;
};
