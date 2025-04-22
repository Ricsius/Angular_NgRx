import { createReducer, on } from "@ngrx/store";
import { decrement, increment, set } from "./counter.actions";

const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    on(increment, (n, action) => n + action.value),
    on(decrement, n => n - 1),
    on(set, (n, action) => action.value)
);