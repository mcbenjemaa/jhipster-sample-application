export interface IPost {
  id?: number;
  title?: string;
  detail?: string;
}

export const defaultValue: Readonly<IPost> = {};
