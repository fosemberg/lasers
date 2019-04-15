import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import {ILed, leds} from './leds'
import {IParam, params} from './params'
import {IPort, ports} from './ports'

const stateUrl = 'https://lasers-c7430.firebaseio.com/.json'

export interface IStoreState {
  params: IParam[],
  leds: ILed[],
  ports: IPort[],
}

const storeFactory = (initialState: IStoreState) =>
  createStore(
    combineReducers({leds, params, ports}),
    (localStorage['redux-store']) ?
      JSON.parse(localStorage['redux-store']) :
      initialState,
    compose(
      applyMiddleware(thunk),
      (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__() || compose
    )
  )

export const fetchStateJson = () =>
  fetch(stateUrl)
    .then(res => res.json())

export const getStore = () =>
  fetchStateJson()
    .then((json) => storeFactory(json))

export const patchStore = (store: any) =>
  fetch(stateUrl, {
    headers: {"Content-Type": "application/json; charset=utf-8"},
    method: 'PATCH',
    body: JSON.stringify(store)
  })

export default getStore