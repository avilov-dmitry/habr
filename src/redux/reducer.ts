import { COUNTER_DECREMENTED_ACTION, COUNTER_INCREMENTED_ACTION } from './actions';

export type CounterStorage = {
  value: number;
};

export const initialStateCounter = {
  value: 0
};

type ActionType = {
  type: string;
  payload?: any;
};

export function counterReducer(state = initialStateCounter, { type }: ActionType) {
  switch (type) {
    case COUNTER_INCREMENTED_ACTION:
      return { value: state.value + 1 };
    case COUNTER_DECREMENTED_ACTION:
      return { value: state.value - 1 };
    default:
      return state;
  }
}
