import {combineReducers, createStore} from 'redux'
import stateData from './data/params14.json'
import {ILed, leds} from './leds'
import {IParam, params} from './params'
import {IPort, ports} from './ports'

export interface IState {
  params: IParam[],
  leds: ILed[],
  ports: IPort[],
}

const storeFactory = (initialState: IState = stateData) =>
  createStore(
    combineReducers({leds, params, ports}),
    false && (localStorage['redux-store']) ?
      JSON.parse(localStorage['redux-store']) :
      initialState,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )

export default storeFactory