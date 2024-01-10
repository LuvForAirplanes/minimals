import { useMemo, useState } from 'react';

import {
  GridFilterItem,
  GridFilterModel,
  GridFeatureMode,
  GridLogicOperator,
  GridCallbackDetails,
} from '@mui/x-data-grid';

import { useDebounced } from './use-debounced';

// Map from the Kendo Grid operator to the GraphQL one.
const operatorMap: Record<string, string> = {
  equals: 'eq',
  startswith: 'startsWith',
  endswith: 'endsWith',
  isempty: 'eq',
};

// Operators that need a value other than the one provided by the filter.
const specialOperators: Record<string, any> = {
  isnotempty: '',
};

export function createWhere<WhereInputType>(filter?: GridFilterModel): WhereInputType | undefined {
  console.log(filter);
  if (
    !filter ||
    filter.items.length === 0 ||
    !filter.items[0].value ||
    filter.items[0].value === ''
  )
    return;

  const args = [];
  const filters: GridFilterItem[] = Array.isArray(filter.items)
    ? (filter.items as GridFilterItem[])
    : [filter.items];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < filters.length; i++) {
    const item = filters[i];
    let parent: Record<string, any> = {};
    args.push(parent);

    const fields = (item.field as string).split('.');
    // eslint-disable-next-line no-plusplus
    for (let j = 0; j < fields.length; j++) {
      const fieldName = fields[j];

      parent[fieldName] = {};
      parent = parent[fieldName];

      if (j === fields.length - 1) {
        // Final field, add the operator. Default to operator name as Kendo if it isn't in the map.
        const itemOp: string = item.operator as string;
        const op: string = operatorMap[itemOp] ?? item.operator;

        if (specialOperators[itemOp] !== undefined) {
          parent[op] = specialOperators[itemOp];
        } else {
          parent[op] = item.value;
        }
      }
    }
  }

  const operator = filter?.logicOperator || GridLogicOperator.And;

  // eslint-disable-next-line consistent-return
  return {
    [operator]: args,
  } as unknown as WhereInputType;
}

export interface Filtering<T> {
  gridArgs: {
    filterModel?: GridFilterModel;
    onFilterModelChange: (model: GridFilterModel, details: GridCallbackDetails<'filter'>) => void;
    filterMode?: GridFeatureMode | undefined;
  };
  where?: T;
  setFilter: any;
}

export function useFiltering<WhereInputType>(
  initialFilter?: GridFilterModel
): Filtering<WhereInputType> {
  const [filter, setFilter] = useState(initialFilter);
  const where = useDebounced(createWhere<WhereInputType>(filter), 250);

  return useMemo<Filtering<WhereInputType>>(
    () => ({
      gridArgs: {
        filterModel: filter,
        onFilterModelChange: (e) => {
          setFilter(e);
        },
        filterMode: 'server',
      },
      where,
      setFilter,
    }),
    [filter, where, setFilter]
  );
}
