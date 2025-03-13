import { RootState } from 'app/store';

export type TCustomSelector<T> = (state: RootState) => T;
