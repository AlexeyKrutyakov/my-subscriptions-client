import { UserRole } from 'shared/types/common.types';

export type User = {
  _id: string;
  name: string;
  avatar: string;
  role: UserRole;
  login?: string;
  password?: string;
  isRoot?: boolean;
};
