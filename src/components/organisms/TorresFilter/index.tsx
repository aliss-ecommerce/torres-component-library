import clsx from 'clsx';
import { FC, useEffect, useState } from 'react';
import {
  TorresButtonIcon,
  TorresTitle,
  TorresSubtitle,
} from 'components/atoms';
import {
  BOOLEAN_OPERATOR,
  FILTER_TYPE,
  IFilter,
  IFilterConfs,
  ISelectedGroupValues,
} from '../../../types/models';
import { ICONS_NAMES } from '../../../types/constants';
import {
  TorresGroupButtonChip,
  TorresGroupButtonColor,
  TorresGroupLinkNext,
} from 'src/components/molecules';

import './style.scss';

const TorresFilter: FC<IFilterConfs> = ({ config, change, close }) => {
  const [filters, setFilters] = useState<IFilter[]>([]);
  const className = clsx('TorresFilter');

  const handleFilterChange = () => {
    if (change) {
      change({ filters, boolOp: BOOLEAN_OPERATOR.AND });
    }
  };
  const handleSelect = (valuesGroup: ISelectedGroupValues) => {
    if (valuesGroup.values.length > 0) {
      const existingFilterIndex = filters.findIndex(
        filter => filter.name === valuesGroup.group
      );
      let newFilters: IFilter[];
      if (existingFilterIndex !== -1) {
        newFilters = filters.map((filter, index) =>
          index === existingFilterIndex
            ? { ...filter, value: valuesGroup.values }
            : filter
        );
      } else {
        newFilters = [
          ...filters,
          {
            name: valuesGroup.group,
            value: valuesGroup.values,
          },
        ];
      }
      setFilters(newFilters);
    } else {
      const filteredFilters = filters.filter(
        filter => filter.name !== valuesGroup.group
      );
      setFilters(filteredFilters);
    }
  };

  useEffect(() => {
    handleFilterChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  if (!config) {
    console.log('Config is not defined', config);
    return;
  }

  return (
    <div className={className}>
      <div className="TorresFilter__container-header">
        <TorresTitle size="medium" text="Filter" />
        <TorresButtonIcon icon={ICONS_NAMES.CLOSE} action={close} />
      </div>
      {config.category ? (
        <div className="TorresFilter__container-item">
          <TorresSubtitle size="small" text={config.category.label} />
          <TorresGroupLinkNext
            group={'category'}
            items={config.category.items ?? []}
            multiple={config.category.type === FILTER_TYPE.ITEMS}
            onSelect={handleSelect}
            orientation="vertical"
          />
        </div>
      ) : null}
      {config.color ? (
        <div className="TorresFilter__container-item">
          <TorresSubtitle size="medium" text={config.color.label} />
          <TorresGroupButtonColor
            group={'color'}
            items={config.color.items ?? []}
            multiple={config.color.type === FILTER_TYPE.ITEMS}
            onSelect={handleSelect}
          />
        </div>
      ) : null}
      {config.size ? (
        <div className="TorresFilter__container-item">
          <TorresSubtitle size="medium" text={config.size.label} />
          <TorresGroupButtonChip
            group={'size'}
            items={config.size.items ?? []}
            multiple={config.size.type === FILTER_TYPE.ITEMS}
            onSelect={handleSelect}
            wrapContent={true}
          />
        </div>
      ) : null}
      {config.style ? (
        <div className="TorresFilter__container-item">
          <TorresSubtitle size="medium" text={config.style.label} />
          <TorresGroupLinkNext
            group={'style'}
            items={config.style.items ?? []}
            multiple={config.style.type === FILTER_TYPE.ITEMS}
            onSelect={handleSelect}
            orientation="vertical"
          />
        </div>
      ) : null}
    </div>
  );
};

export default TorresFilter;
