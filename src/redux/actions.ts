export const COUNTER_INCREMENTED_ACTION = 'COUNTER_INCREMENTED_ACTION';
export function counterIncrementedActions(payload: any) {
  return { type: COUNTER_INCREMENTED_ACTION, payload };
}

export const COUNTER_DECREMENTED_ACTION = 'COUNTER_DECREMENTED_ACTION';
export function counterDecrementedActions(payload: any) {
  return { type: COUNTER_DECREMENTED_ACTION, payload };
}

export const FETCH_ACTION_SAGA = 'FETCH_ACTION_SAGA';
export function fetchActionSaga() {
  return { type: FETCH_ACTION_SAGA };
}
