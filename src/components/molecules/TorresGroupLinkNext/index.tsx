import clsx from "clsx";
import { FC, useEffect, useState } from "react";
import { TorresLinkNext } from "src/components/atoms";
import { IGroupButtonLinkNext } from "../../../types/models";

import "./style.scss";

const TorresGroupLinkNext: FC<IGroupButtonLinkNext> = ({
  items,
  onSelect,
  group,
  multiple,
  orientation = "horizontal",
  wrapContent = true,
}) => {
  const [selected, setSelected] = useState<
    string | number | (number | string)[] | null
  >(null);

  const className = clsx("torres-group-link-next", {
    [`torres-group-link-next--wrapContent`]: wrapContent,
    [`torres-group-link-next--noWrapContent`]: !wrapContent,
  });
  const classNameContainer = clsx("torres-group-link-next", {
    [`torres-group-link-next__container--${orientation}`]: orientation,
    [`torres-group-link-next__container--wrapContent`]: wrapContent,
    [`torres-group-link-next__container--noWrapContent`]: !wrapContent,
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
      <div className={classNameContainer}>
        {items.map((item) => (
          <TorresLinkNext
            key={item.value}
            variant="secondary"
            action={() => handleClick(item.value)}
            text={item.label}
            isActionDisabled={true}
            cursorPointerInDisabled={true}
            isDisabled={
              !(Array.isArray(selected)
                ? selected.includes(item.value)
                : selected === item.value)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default TorresGroupLinkNext;
