import { Dispatch } from "redux"
import _EventType from "../_ActionsTypes/_EventType"
const addEvent = (amount: {}) => {
    return (dispatch: Dispatch) => {
        dispatch({ type: _EventType.ADD_EVENT, payload: amount })
    }
}
export default addEvent