import {combineReducers, createStore} from 'redux'
import {ILed, leds} from './leds'
import {IParam, params} from './params'
import {IPort, ports} from './ports'

const stateUrl = 'https://raw.githubusercontent.com/fosemberg/lasers/gh-pages/params14.json'

export interface IState {
  params: IParam[],
  leds: ILed[],
  ports: IPort[],
}

const storeFactory = (initialState: IState) =>
  createStore(
    combineReducers({leds, params, ports}),
    false && (localStorage['redux-store']) ?
      JSON.parse(localStorage['redux-store']) :
      initialState,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )

const getStore = () =>
  fetch(stateUrl)
    .then(res => res.json())
    .then((json) => storeFactory(json))

export default getStore