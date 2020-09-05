import { Player } from 'models/IBoard';

export interface INewGameModal {
  open: boolean;
  selectedPlayers: Player[];
}
