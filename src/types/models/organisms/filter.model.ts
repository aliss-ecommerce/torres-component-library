/**
 * Filter Bar Conditions
 */
declare enum CONDITIONS {
  EQUAL = "equals",
  NOT_EQUAL = "does not equals",
  IS_SET = "is set",
  IS_NOT_SET = "is not set",
  GREATER_THAN = "greater than",
  MINOR_THAN = "minor than",
  IS_TRUE = "is true",
  IS_FALSE = "is false",
  MORE_THAN = "more than",
  LESS_THAN = "less than",
  WAS_MADE = "was made",
  WAS_NOT_MADE = "was not made",
  WAS_ON = "was on",
  WAS_NOT_ON = "was not on",
  WAS_AGO = "was ago",
  WAS_NOT_AGO = "was not ago",
  WAS_MORE_THAN = "was more than",
  WAS_NOT_MORE_THAN = "was not more than",
  WAS_LESS_THAN = "was less than",
  WAS_NOT_LESS_THAN = "was not less than",
  WITH_PROPERTY = "with property",
  ANNIVERSARY_IS = "anniversary is",
  CONTAINS = "containts",
  SENT = "sent",
  NOT_SENT = "not sent",
  CLICKED = "clicked",
  NOT_CLICKED = "not clicked",
  CHANGED_VALUE = "changed value",
  IS_IN_AUDIENCE = "is in audience",
  IS_NOT_IN_AUDIENCE = "is not in audience",
  ENGAGED = "engaged",
  ATTRIBUTED = "attributed",
  NONE = ""
}
/**
* Filter Bar Boolean Operator
*/
declare enum BOOLEAN_OPERATOR {
  AND = "and",
  OR = "or"
}
/**
* Filter Bar Filter Operator
*/
declare enum FILTER_OP {
  EQ = "eq",
  NE = "ne",
  GT = "gt",
  GTE = "gte",
  LT = "lt",
  LTE = "lte",
  IN = "in",
  NIN = "nin"
}

/**
* Filter Bar Filter Type
*/
declare enum FILTER_TYPE {
  ITEM = "item",
  ITEMS = "items",
  NUMBER_VALUE = "numberValue",
  NUMBER = "number",
  STRING_VALUE = "stringValue",
  STRING = "string",
  ITEM_VALUE = "itemValue"
}

interface FilterConf {
  /** Label of the filter */
  label: string;
  /** Identifier of the filter */
  value: string;
  /** Key to read the label */
  labelKey?: string;
  /** Key to read the value */
  valueKey?: string;
  /** Placeholder of the value */
  placeholder: string;
  typeLabel: string;
  /** Type of value input */
  type?: FILTER_TYPE;
  /** Items for select */
  items?: any[];
  /** Item values for select */
  itemValues?: any[];
  /** It cannot be removed */
  fixed?: boolean;
  /** Key to read the label */
  itemValueLabelKey?: string;
  /** Key to read the value */
  itemValueValueKey?: string;
  /** Placeholder of the item value */
  itemValuePlaceholder?: string;
}
interface Filter {
  name: string | null;
  value: (string | number)[] | number | string | null;
  isOpen?: boolean;
  op?: FILTER_OP;
  itemValue?: (string | number)[] | number | string | null;
}
interface Filter {
  name: string | null;
  value: (string | number)[] | number | string | null;
  isOpen?: boolean;
  op?: FILTER_OP;
  itemValue?: (string | number)[] | number | string | null;
}
interface FiltersChange {
  filters: Filter[];
  boolOp: BOOLEAN_OPERATOR;
  groupBy?: string;
}
interface FiltersChange {
  filters: Filter[];
  boolOp: BOOLEAN_OPERATOR;
  groupBy?: string;
}
interface FilterConfs {
  [filterName: string]: FilterConf;
}

export { BOOLEAN_OPERATOR, CONDITIONS, FILTER_OP, FILTER_TYPE, type Filter, type FilterConf, type FilterConfs, type FiltersChange };

export type IFilter = Filter;

export type IFilterChange = FiltersChange;

export type IFilterConfs = {
  config: FilterConfs;
  change?: (value: IFilterChange) => void;
  close: () => void;
};
