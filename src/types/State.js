//@flow
import type {Deals} from './Deals';

export type State = {|
    dealReducer: Deals,
    dealSearchReducer: string,
    dealOrderReducer: bool
|}