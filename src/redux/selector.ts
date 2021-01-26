import { createSelector } from 'reselect';
import { ReduxStorageType } from '../types';
import { CounterStorage, initialStateCounter } from './reducer';

export const counterStorageSelector = (store: ReduxStorageType) =>
  store.counter || initialStateCounter;

export const getCountSelector = createSelector(
  [counterStorageSelector],
  ({ value }: CounterStorage) => value
);
