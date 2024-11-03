import { FC, useEffect, useState } from "react";
import { IGroupButton } from "../../../types/models";
import { TorresButtonChip } from "src/components/atoms";

import "./style.scss";
import clsx from "clsx";

const TorresGroupButtonChip: FC<IGroupButton> = ({
  items,
  onSelect,
  multiple,
  group,
  wrapContent = false,
}) => {
  const [selected, setSelected] = useState<
    string | number | (number | string)[] | null
  >(null);

  const className = clsx("torres-group-button-chip", {
    [`torres-group-button-chip--wrapContent`]: wrapContent,
    [`torres-group-button-chip--noWrapContent`]: !wrapContent,
  });

  const handleClick = (value: string | number) => {
    if (multiple) {
      if (Array.isArray(selected)) {
        if (selected.includes(value)) {
          setSelected(selected.filter((item) => item !== value));
        } else {
          setSelected([...selected, value]);
        }
      } else {
        setSelected([value]);
      }
    } else {
      setSelected(value);
    }
  };

  useEffect(() => {
    if (Array.isArray(selected)) {
      return onSelect && onSelect({ group: group, values: selected });
    }
    return (
      onSelect && onSelect({ group: group, values: selected ? [selected] : [] })
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  useEffect(() => {
    if (multiple) {
      setSelected(
        items.filter((item) => item.isSelected).map((item) => item.value),
      );
    } else {
      setSelected(items.find((item) => item.isSelected)?.value ?? null);
    }
  }, [items, multiple]);

  return (
    <div className={className}>
      {items.map((item) => (
        <TorresButtonChip
          key={item.value}
          action={() => handleClick(item.value)}
          text={item.label}
          isSelected={
            Array.isArray(selected)
              ? selected.includes(item.value)
              : selected === item.value
          }
        />
      ))}
    </div>
  );
};

export default TorresGroupButtonChip;
