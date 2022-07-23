export const ROW_BOX = {
  align: 'center',
  direction: 'row',
  fill: 'horizontal',
  justify: 'stretch',
  gap: 'medium',
  pad: 'small',
};
export const CELL_B = {
  direction: 'row',
  gap: 'small',
  justify: 'stretch',
  align: 'center',
  fill: 'horizontal',
};
export const CELL_B_S = {
  ...CELL_B,
  pad: {
    top: '0.5rem',
    right: '2px',
    left: '2px',
    bottom: '0.5rem',
  },
};
export const LV_GRID_L = {
  columns: ['6rem', '1fr'],
  rows: ['auto'],
  justify: 'stretch',
  align: 'center',
  fill: 'horizontal',
  areas: [
    {
      name: 'label',
      start: [0, 0], end: [0, 0],
    },
    {
      name: 'info',
      start: [1, 0], end: [1, 0],
    },
  ],
};
export const LV_GRID_S = {
  rows: ['auto', 'auto'],
  columns: ['auto'],
  justify: 'stretch',
  align: 'center',
  fill: 'horizontal',
  areas: [
    {
      name: 'label',
      start: [0, 0], end: [0, 0],
    },
    {
      name: 'info',
      start: [0, 1], end: [0, 1],
    },
  ],
};
export const TASK_TYPE_ROW_GRID_L = {
  rows: ['auto', 'auto'],
  columns: ['2fr', '2fr', '1fr', '`1fr', '3fr', '20rem'],
  gap: 'small',
  fill: 'horizontal',
  areas: [
    {
      name: 'id',
      start: [0, 0],
      end: [0, 0],
    },
    {
      name: 'name',
      start: [1, 0],
      end: [1, 0],
    },
    {
      name: 'order',
      start: [2, 0],
      end: [2, 0],
    },
    {
      name: 'interval',
      start: [3, 0],
      end: [3, 0],
    },
    {
      name: 'control',
      start: [4, 0],
      end: [4, 1],
    },
    {
      name: 'notes',
      start: [0, 1],
      end: [3, 1],
    },
  ],
};
export const TASK_TYPE_ROW_GRID_M = {
  rows: ['auto', 'auto', 'auto'],
  columns: ['1fr', '1fr','1fr', '1fr','1fr', '1fr', '20rem'],
  gap: 'small',
  fill: 'horizontal',
  areas: [
    {
      name: 'id',
      start: [0, 0],
      end: [2, 0],
    },
    {
      name: 'name',
      start: [3, 0],
      end: [5, 0],
    },
    {
      name: 'order',
      start: [0, 1],
      end: [1, 1],
    },
    {
      name: 'interval',
      start: [2, 1],
      end: [3, 1],
    },
    {
      name: 'control',
      start: [6, 0],
      end: [6, 1],
    },
    {
      name: 'notes',
      start: [0, 2],
      end: [5, 2],
    },
  ],
};

export const TASK_TYPE_ROW_GRID_S = {
  rows: ['auto','auto','auto','auto','auto','auto',],
  columns: ['1fr'],
  justify: 'stretch',
  align: 'stretch',
  fill: 'horizontal',
  areas: [
    {
      name: 'id',
      start: [0, 0],
      end: [0, 0],
    },
    {
      name: 'name',
      start: [0, 1],
      end: [0, 1],
    },
    {
      name: 'order',
      start: [0, 2],
      end: [0, 2],
    },
    {
      name: 'interval',
      start: [0, 3],
      end: [0, 3],
    },
    {
      name: 'notes',
      start: [0, 4],
      end: [0, 4],
    },
    {
      name: 'control',
      start: [0, 5],
      end: [0, 5],
    },
  ],
};

export const TABLE_BOX = {
  align: 'center',
  direction: 'column',
  fill: 'horizontal',
  justify: 'stretch',
  gap: '0',
};

const TASK_TYPE_GRID_SIZES = {
  large: TASK_TYPE_ROW_GRID_L,
  medium: TASK_TYPE_ROW_GRID_M,
  small: TASK_TYPE_ROW_GRID_S,
};
export const getTaskTypeGrid = (size) => TASK_TYPE_GRID_SIZES[size] || TASK_TYPE_ROW_GRID_M;
export const getCell = (size) => (size === 'small') ? CELL_B_S : CELL_B;
