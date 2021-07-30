import { Dispatch } from "redux"
import _EventType from "../_ActionsTypes/_EventType"
const _event = (amount: {}) => {
    return (dispatch: Dispatch) => {
        dispatch({ type: _EventType.ADD_EVENT, payload: amount })
    }
}
export default _event