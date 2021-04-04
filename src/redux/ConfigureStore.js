import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
// import logger from 'redux-logger'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { loggedInUser } from './loggedInUser'
import { plans } from './plans'
import { userPlans } from './userPlans'

export const configureStore = () => {

    const persistConfig = {
        key: 'root',
        storage,
    }

    const store = createStore(
        persistCombineReducers(persistConfig, {
            loggedInUser,
            plans,
            userPlans
        }),
        compose(
            applyMiddleware(thunk),
            // window.__REDUX_DEVTOOLS_EXTENSION__ && window__REDUX_DEVTOOLS_EXTENSION__()
        )
    )
    const persistor = persistStore(store)
    return { persistor, store }
}