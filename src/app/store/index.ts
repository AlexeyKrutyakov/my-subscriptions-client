import { configureStore } from '@reduxjs/toolkit';
import { userModel } from '../../entities/user/model/user';

export const store = configureStore({
  reducer: {
    user: userModel.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
