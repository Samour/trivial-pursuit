import { Category, ICellProfile } from 'models/IBoard';

export const getProfile = (profiles: ICellProfile[], category: Category | undefined,
  home: string | undefined): ICellProfile | undefined => {
  if (category) {
    return profiles.find((p) => p.category === category);
  } else {
    return profiles.find((p) => p.home === home);
  }
};
