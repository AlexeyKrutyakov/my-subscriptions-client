export type ValueOf<T> = T[keyof T];

export const userRole = {
  ADMIN: 'Admin',
  CLIENT: 'Client',
} as const;

export type UserRole = ValueOf<typeof userRole>;
