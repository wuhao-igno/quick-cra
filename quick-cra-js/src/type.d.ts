export type SetState<T> = ((state: T) => void) | ((func: (prev: T, next: T) => void) => void);

export type StateArray<T> = [T, SetState<T>];
