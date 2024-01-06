import { useMemo, useState } from 'react';

import { GridSortModel, GridCallbackDetails } from '@mui/x-data-grid';

import { SortEnumType } from 'src/graphql/types/graphql';

function createOrderBy<SortInputType>(
  sort?: GridSortModel,
  fallbackSort?: GridSortModel
): SortInputType[] {
  if (!sort || sort.length === 0) {
    if (fallbackSort) {
      return createOrderBy(fallbackSort);
    }
    return [];
  }

  const orderBy: Record<string, any> = {};

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < sort.length; i++) {
    const item = sort[i];
    const direction = (item.sort?.toUpperCase() ?? 'ASC') as SortEnumType;

    const fields = item.field.split('.');
    // Has to be 'any' because it changes as we drill down into child fields.
    let parent: any = orderBy;

    // eslint-disable-next-line no-plusplus
    for (let j = 0; j < fields.length; j++) {
      const fieldName = fields[j];

      if (j === fields.length - 1) {
        // Final field, set the sort direction.
        parent[fieldName] = direction;
      } else {
        if (parent[fieldName] === undefined) {
          parent[fieldName] = {};
        }
        parent = parent[fieldName];
      }
    }
  }

  const result = [orderBy as SortInputType];

  if (fallbackSort) {
    // We have a default sort, and the fields wasn't already sorted.
    result.push(createOrderBy<SortInputType>(fallbackSort)[0]);
  }

  return result;
}

interface Sorting<T> {
  gridArgs: {
    sortModel?: GridSortModel;
    onSortModelChange: (model: GridSortModel, details: GridCallbackDetails<any>) => void;
  };
  order: T[];
}

/**
 *
 * @param initialSort
 * @param fallbackSort A sort that will be appended to all other sorts if the specified field isn't already sorted. This
 *                      is useful when you need to always end your sorting by ID so that the order is defined and aren't
 *                      randomly ordered when paging. This is likely the solution if you see duplicate ID warnings in
 *                      the dev tools console.
 */
export function useSorting<SortInputType>(
  initialSort?: GridSortModel,
  fallbackSort?: GridSortModel
): Sorting<SortInputType> {
  const [sort, setSort] = useState<GridSortModel | undefined>(initialSort);

  return useMemo<Sorting<SortInputType>>(() => {
    const order = createOrderBy<SortInputType>(sort, fallbackSort);

    return {
      gridArgs: {
        onSortModelChange: (e) => {
          setSort(e);
        },
        sortModel: sort,
      },
      order,
    };
  }, [sort, fallbackSort]);
}
