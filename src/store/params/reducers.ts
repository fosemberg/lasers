import {IAction} from "../../utils/redux";
import {SYNCHRONIZE} from "./constants";
import {SAVE_PARAM} from "./constants";
import {IParam} from "./stateDeclaration";

export const param = (state: IParam, action: IAction) => {
  switch (action.type) {
    case SAVE_PARAM:
      return (state.name !== action.payload.name) ?
        state :
        {
          ...state,
          value: action.payload.value,
        }
    default :
      return state
  }
}

export const params = (state = [], action: IAction) => {
  switch (action.type) {
    case SAVE_PARAM:
      return state.map(
        c => param(c, action)
      )
    case SYNCHRONIZE:
      return action.payload.json.params
    default:
      return state
  }
}