import { FC, useEffect, useState } from "react";
import TorresButtonColor from "src/components/atoms/Button/TorresButtonColor";
import { IGroupButtonColor } from "../../../types/models";

import "./style.scss";
import clsx from "clsx";

const TorresGroupButtonColor: FC<IGroupButtonColor> = ({
  items,
  onSelect,
  multiple,
  group,
  wrapContent = false,
}) => {
  const [selected, setSelected] = useState<
    string | number | (number | string)[] | null
  >(null);

  const className = clsx("torres-group-button-color", {
    [`torres-group-button-color--wrapContent`]: wrapContent,
    [`torres-group-button-color--noWrapContent`]: !wrapContent,
  });

  const handleClick = (id: string | number) => {
    console.log("id", id);
    if (multiple) {
      if (Array.isArray(selected)) {
        if (selected.includes(id)) {
          setSelected(selected.filter((item) => item !== id));
        } else {
          setSelected([...selected, id]);
        }
      } else {
        setSelected([id]);
      }
    } else {
      setSelected(id);
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
        items.filter((item) => item.isSelected).map((item) => item.id),
      );
    } else {
      setSelected(items.find((item) => item.isSelected)?.id ?? null);
    }
  }, [items, multiple]);

  return (
    <div className={className}>
      {items.map((item) => (
        <TorresButtonColor
          key={item.id}
          id={item.id}
          color={item.color}
          action={() => handleClick(item.id)}
          isSelected={
            Array.isArray(selected)
              ? selected.includes(item.id)
              : selected === item.id
          }
        />
      ))}
    </div>
  );
};

export default TorresGroupButtonColor;
