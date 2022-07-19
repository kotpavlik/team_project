import {applyMiddleware, combineReducers, createStore} from 'redux';
import  thunkMiddleware from 'redux-thunk'
import {LoginDataReducer} from '../reducers/LoginData-reducer';


const rootReducer = combineReducers({
    loginData:LoginDataReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware)) ;

export type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
export type AppDispatch = typeof store.dispatch