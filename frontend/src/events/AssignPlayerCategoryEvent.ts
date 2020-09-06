import { Player, Category } from 'models/IBoard';
import { EventType } from './IEvent';

export interface IAssignPlayerCategoryEvent {
  type: EventType.ASSIGN_PLAYER_CATEGORY;
  player: Player;
  category: Category;
  hasCategory: boolean;
}

export const assignPlayerCategoryEvent = (player: Player, category: Category, hasCategory: boolean):
  IAssignPlayerCategoryEvent => ({
    type: EventType.ASSIGN_PLAYER_CATEGORY,
    player,
    category,
    hasCategory
  });
