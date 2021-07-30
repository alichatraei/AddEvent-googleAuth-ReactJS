import _EventAction from "../_Actions/_EventAction"
import _EventType from "../_ActionsTypes/_EventType";
type _State = { title: string, date: string }[]
const _EventReducer = (state: _State = []
    , action: _EventAction) => {
    switch (action.type) {
        case _EventType.ADD_EVENT:
            return [...state, action.payload]
        default:
            return state;
    }
}
export default _EventReducer