export interface ICoordinate {
  x: number;
  y: number;
}

export interface IBoardConfiguration {
  boardSize: { width: number; height: number };
  boardCenter: ICoordinate;
  outerTrackInnerRadius: number;
  outerTrackOuterRadius: number;
  trackGutter: number;
  gutterColour: string;
  playerPiece: {
    innerRadius: number;
    border: number;
    borderColour: string;
  };
}

export interface ICell {
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

export type Player = 'green' | 'purple' | 'blue' | 'orange' | 'yellow' | 'pink';

export interface ICellProfile {
  category?: Category;
  home?: Player;
  colour: string;
}

export interface IInnerTrack {
  angle: number;
  width: number;
  cells: ICell[];
}

export interface IBoard {
  innerTracks: IInnerTrack[];
  outerCells: ICell[];
  profiles: ICellProfile[];
}
