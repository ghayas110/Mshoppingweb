import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
// import logger from 'redux-logger'
import { loggedInUser } from './loggedInUser'
import { plans } from './plans'
import { userPlans } from './userPlans'

export const configureStore = () => {

    const store = createStore(
        combineReducers({
            loggedInUser,
            plans,
            userPlans
        }),
        compose(
            applyMiddleware(thunk),
            // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    )
    return store
}