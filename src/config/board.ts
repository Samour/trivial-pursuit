import { IBoardConfiguration, IBoard, Category } from 'models/IBoard';

export const boardConfiguration: IBoardConfiguration = {
  boardSize: { width: 600, height: 600 },
  boardCenter: { x: 300, y: 300 },
  outerTrackInnerRadius: 240,
  outerTrackOuterRadius: 295,
};

const OUTER_CELLS_TOTAL = 48;
const OUTER_CELL_SIZE = 2 * Math.PI / OUTER_CELLS_TOTAL;

export const boardBase: IBoard = {
  outerCells: [
    {
      category: Category.ENTERTAINMENT,
      size: OUTER_CELL_SIZE,
      offset: 0,
    },
    {
      category: Category.ROLL_AGAIN,
      size: OUTER_CELL_SIZE,
      offset: OUTER_CELL_SIZE,
    },
    {
      category: Category.HISTORY,
      size: OUTER_CELL_SIZE,
      offset: 2 * OUTER_CELL_SIZE,
    },
    {
      home: 'purple',
      size: 2 * OUTER_CELL_SIZE,
      offset: 3 * OUTER_CELL_SIZE,
    },
    {
      category: Category.HISTORY,
      size: OUTER_CELL_SIZE,
      offset: 5 * OUTER_CELL_SIZE,
    },
    {
      category: Category.ROLL_AGAIN,
      size: OUTER_CELL_SIZE,
      offset: 6 * OUTER_CELL_SIZE,
    },
    {
      category: Category.SPORTS,
      size: OUTER_CELL_SIZE,
      offset: 7 * OUTER_CELL_SIZE,
    },
    {
      category: Category.SCIENCE,
      size: OUTER_CELL_SIZE,
      offset: 8 * OUTER_CELL_SIZE,
    },
    {
      category: Category.ROLL_AGAIN,
      size: OUTER_CELL_SIZE,
      offset: 9 * OUTER_CELL_SIZE,
    },
    {
      category: Category.ENTERTAINMENT,
      size: OUTER_CELL_SIZE,
      offset: 10 * OUTER_CELL_SIZE,
    },
    {
      home: 'blue',
      size: 2 * OUTER_CELL_SIZE,
      offset: 11 * OUTER_CELL_SIZE,
    },
    {
      category: Category.ENTERTAINMENT,
      size: OUTER_CELL_SIZE,
      offset: 13 * OUTER_CELL_SIZE,
    },
    {
      category: Category.ROLL_AGAIN,
      size: OUTER_CELL_SIZE,
      offset: 14 * OUTER_CELL_SIZE,
    },
    {
      category: Category.HISTORY,
      size: OUTER_CELL_SIZE,
      offset: 15 * OUTER_CELL_SIZE,
    },
    {
      category: Category.ARTS,
      size: OUTER_CELL_SIZE,
      offset: 16 * OUTER_CELL_SIZE,
    },
    {
      category: Category.ROLL_AGAIN,
      size: OUTER_CELL_SIZE,
      offset: 17 * OUTER_CELL_SIZE,
    },
    {
      category: Category.SCIENCE,
      size: OUTER_CELL_SIZE,
      offset: 18 * OUTER_CELL_SIZE,
    },
    {
      home: 'orange',
      size: 2 * OUTER_CELL_SIZE,
      offset: 19 * OUTER_CELL_SIZE,
    },
    {
      category: Category.SCIENCE,
      size: OUTER_CELL_SIZE,
      offset: 21 * OUTER_CELL_SIZE,
    },
    {
      category: Category.ROLL_AGAIN,
      size: OUTER_CELL_SIZE,
      offset: 22 * OUTER_CELL_SIZE,
    },
    {
      category: Category.ENTERTAINMENT,
      size: OUTER_CELL_SIZE,
      offset: 23 * OUTER_CELL_SIZE,
    },
    {
      category: Category.GEOGRAPHY,
      size: OUTER_CELL_SIZE,
      offset: 24 * OUTER_CELL_SIZE,
    },
    {
      category: Category.ROLL_AGAIN,
      size: OUTER_CELL_SIZE,
      offset: 25 * OUTER_CELL_SIZE,
    },
    {
      category: Category.ARTS,
      size: OUTER_CELL_SIZE,
      offset: 26 * OUTER_CELL_SIZE,
    },
    {
      home: 'yellow',
      size: 2 * OUTER_CELL_SIZE,
      offset: 27 * OUTER_CELL_SIZE,
    },
    {
      category: Category.ARTS,
      size: OUTER_CELL_SIZE,
      offset: 29 * OUTER_CELL_SIZE,
    },
    {
      category: Category.ROLL_AGAIN,
      size: OUTER_CELL_SIZE,
      offset: 30 * OUTER_CELL_SIZE,
    },
    {
      category: Category.SCIENCE,
      size: OUTER_CELL_SIZE,
      offset: 31 * OUTER_CELL_SIZE,
    },
    {
      category: Category.SPORTS,
      size: OUTER_CELL_SIZE,
      offset: 32 * OUTER_CELL_SIZE,
    },
    {
      category: Category.ROLL_AGAIN,
      size: OUTER_CELL_SIZE,
      offset: 33 * OUTER_CELL_SIZE,
    },
    {
      category: Category.GEOGRAPHY,
      size: OUTER_CELL_SIZE,
      offset: 34 * OUTER_CELL_SIZE,
    },
    {
      home: 'pink',
      size: 2 * OUTER_CELL_SIZE,
      offset: 35 * OUTER_CELL_SIZE,
    },
    {
      category: Category.GEOGRAPHY,
      size: OUTER_CELL_SIZE,
      offset: 37 * OUTER_CELL_SIZE,
    },
    {
      category: Category.ROLL_AGAIN,
      size: OUTER_CELL_SIZE,
      offset: 38 * OUTER_CELL_SIZE,
    },
    {
      category: Category.ARTS,
      size: OUTER_CELL_SIZE,
      offset: 39 * OUTER_CELL_SIZE,
    },
    {
      category: Category.HISTORY,
      size: OUTER_CELL_SIZE,
      offset: 40 * OUTER_CELL_SIZE,
    },
    {
      category: Category.ROLL_AGAIN,
      size: OUTER_CELL_SIZE,
      offset: 41 * OUTER_CELL_SIZE,
    },
    {
      category: Category.SPORTS,
      size: OUTER_CELL_SIZE,
      offset: 42 * OUTER_CELL_SIZE,
    },
    {
      home: 'green',
      size: 2 * OUTER_CELL_SIZE,
      offset: 43 * OUTER_CELL_SIZE,
    },
    {
      category: Category.SPORTS,
      size: OUTER_CELL_SIZE,
      offset: 45 * OUTER_CELL_SIZE,
    },
    {
      category: Category.ROLL_AGAIN,
      size: OUTER_CELL_SIZE,
      offset: 46 * OUTER_CELL_SIZE,
    },
    {
      category: Category.GEOGRAPHY,
      size: OUTER_CELL_SIZE,
      offset: 47 * OUTER_CELL_SIZE,
    },
  ],
  profiles: [
    {
      category: Category.ENTERTAINMENT,
      colour: 'pink',
    },
    {
      category: Category.ROLL_AGAIN,
      colour: 'grey',
    },
    {
      category: Category.HISTORY,
      colour: 'yellow',
    },
    {
      category: Category.SPORTS,
      colour: 'orange',
    },
    {
      category: Category.SCIENCE,
      colour: 'green',
    },
    {
      category: Category.ARTS,
      colour: 'purple',
    },
    {
      category: Category.GEOGRAPHY,
      colour: 'blue',
    },
    {
      home: 'purple',
      colour: 'purple',
    },
    {
      home: 'blue',
      colour: 'blue',
    },
    {
      home: 'orange',
      colour: 'orange',
    },
    {
      home: 'yellow',
      colour: 'yellow',
    },
    {
      home: 'pink',
      colour: 'pink',
    },
    {
      home: 'green',
      colour: 'green',
    },
  ],
};
