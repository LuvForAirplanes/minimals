/* eslint-disable react/destructuring-assignment */
import { useState, ReactNode } from 'react';

import { Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { GridTreeNodeWithRender, GridRenderEditCellParams } from '@mui/x-data-grid';

import { ListingCategory } from 'src/graphql/types/graphql';

export function SelectCell(
  props: GridRenderEditCellParams<any, any, any, GridTreeNodeWithRender>,
  categories: ListingCategory[]
) {
  const { id, value, api, field } = props;

  // Use a local state to store the current value
  const [val, setVal] = useState(value);

  // Handle the change event of the select box
  const handleChange = (event: SelectChangeEvent<any>, child: ReactNode) => {
    // Update the local state
    setVal(event.target.value as string);
    // Update the data grid state
    api.setEditCellValue({ id, field, value: event.target.value }, event);
    // Commit the change and exit the edit mode
    // api.commitCellChange({ id, field });
    // api.setCellMode(id, field, 'view');
  };

  return (
    <Select value={val} onChange={handleChange}>
      {categories.map((option) => (
        <MenuItem key={option.id} value={option.id}>
          {option.name}
        </MenuItem>
      ))}
    </Select>
  );
}
