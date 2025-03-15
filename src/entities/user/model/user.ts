import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserRole } from 'shared/types/common.types';
import { User } from 'entities/user/types';
import { TCustomSelector } from 'shared/types/store.types';

export type UserState = {
  _id: string;
  role: UserRole | null;
  data: User | null;
  isLoading: boolean;
  isFailed: boolean;
  error?: string | null | undefined;
};

const initialState: UserState = {
  _id: '',
  role: null,
  data: null,
  isLoading: false,
  isFailed: false,
  error: null,
};

export const isRootSelector: TCustomSelector<boolean> = state =>
  !!state.user && (state.user.data?.isRoot ?? false);

export const userModel = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<User>) => {
      state.data = payload;
    },
  },
});

export const { setUser } = userModel.actions;
