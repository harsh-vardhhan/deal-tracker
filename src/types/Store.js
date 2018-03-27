//@flow
import type {
    Store as ReduxStore,
    Dispatch as ReduxDispatch
} from 'redux';
import type {Action} from './Action';
import type {State} from './State';
export type Store = ReduxStore<State, Action>;
export type Dispatch = ReduxDispatch<State, Action>