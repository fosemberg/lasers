import {IAction} from "../../utils/redux";
import {fetchStateJson, patchStore} from "../index";
import {SAVE_PARAM, SYNCHRONIZE} from "./constants";

export const saveParam = (name: string, value: string) => (dispatch: any, getState: any) => {
  const newParams = getState().params
    .map((param: any) => param.name === name ? {...param, value} : param)

  patchStore({
    params: newParams
  }).then(
    () => {
      dispatch(saveParamAction(name, value))
    }
  )
}

export const saveParamAction = (name: string, value: string): IAction =>
  ({
    type: SAVE_PARAM,
    payload: {
      name,
      value,
    }
  })

export const synchronize = () => (dispatch: any) => {
  fetchStateJson()
    .then(
      json => {
        dispatch(synchronizeAction(json))
      }
    )
}

export const synchronizeAction = (json: any): IAction =>
  ({
    type: SYNCHRONIZE,
    payload: {
      json
    }
  })