export interface ICoordinate {
  x: number;
  y: number;
}

export interface IBoardConfiguration {
  boardSize: { width: number; height: number };
  boardCenter: ICoordinate;
  outerTrackInnerRadius: number;
  outerTrackOuterRadius: number;
}

export interface IOuterCell {
  category?: Category;
  home?: Player;
  size: number;
  offset: number;
}

export enum Category {
  ROLL_AGAIN = 'ROLL_AGAIN',
  GEOGRAPHY = 'GEOGRAPHY',
  ENTERTAINMENT = 'ENTERTAINMENT',
  HISTORY = 'HISTORY',
  ARTS = 'ARTS',
  SCIENCE = 'SCIENCE',
  SPORTS = 'SPORTS',
}

type Player = 'green' | 'purple' | 'blue' | 'orange' | 'yellow' | 'pink';

export interface ICellProfile {
  category?: Category;
  home?: Player;
  colour: string;
}

export interface IBoard {
  outerCells: IOuterCell[];
  profiles: ICellProfile[];
}
