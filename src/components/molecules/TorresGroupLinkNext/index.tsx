import clsx from 'clsx';
import { FC, useEffect, useRef, useState } from 'react';
import { TorresLinkNext } from 'src/components/atoms';
import { IGroupButtonLinkNext } from '../../../types/models';

import './style.scss';

const TorresGroupLinkNext: FC<IGroupButtonLinkNext> = ({
  items,
  onSelect,
  group,
  multiple,
  orientation = 'horizontal',
  wrapContent = true,
}) => {
  const [selected, setSelected] = useState<
    string | number | (number | string)[] | null
  >(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const className = clsx('torres-group-link-next', {
    [`torres-group-link-next--wrapContent`]: wrapContent,
    [`torres-group-link-next--noWrapContent`]: !wrapContent,
  });
  const classNameContainer = clsx('torres-group-link-next', {
    [`torres-group-link-next__container--${orientation}`]: orientation,
    [`torres-group-link-next__container--wrapContent`]: wrapContent,
    [`torres-group-link-next__container--noWrapContent`]: !wrapContent,
  });

  const smoothScrollToElement = (
    container: HTMLElement,
    target: HTMLElement,
    duration: number
  ) => {
    const start = container.scrollLeft;
    const targetPosition =
      target.offsetLeft - container.offsetWidth / 2 + target.offsetWidth / 2;
    const change = targetPosition - start;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      container.scrollLeft = start + change * progress;

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const handleClick = (value: string | number) => {
    if (multiple) {
      if (Array.isArray(selected)) {
        if (selected.includes(value)) {
          setSelected(selected.filter(item => item !== value));
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
        items.filter(item => item.isSelected).map(item => item.value)
      );
    } else {
      setSelected(items.find(item => item.isSelected)?.value ?? null);
    }
  }, [items, multiple]);

  useEffect(() => {
    // dirigir el scroll horizontal al item seleccionado
    if (orientation === 'horizontal' && wrapContent) {
      if (containerRef?.current) {
        const selectedItem = items.find(item => item.value === selected);
        const item = document.getElementById(`${selectedItem?.value}`);
        if (containerRef.current && item) {
          smoothScrollToElement(containerRef.current, item, 500); // 500ms de duración
        }
      }
    }
  }, [selected]);

  return (
    <div className={className}>
      <div ref={containerRef} className={classNameContainer}>
        {items.map(item => (
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
            id={`${item.value}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TorresGroupLinkNext;
