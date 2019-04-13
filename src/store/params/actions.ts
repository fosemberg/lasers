import {IAction} from "../../utils/redux";
import {SAVE_PARAM} from "./constants";

export const saveParam = (name: string, value: string): IAction =>
  ({
    type: SAVE_PARAM,
    payload: {
      name,
      value,
    }
  })