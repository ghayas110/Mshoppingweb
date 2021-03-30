import * as ActionTypes from './ActionTypes'

export const loggedInUser = (state = {
    isLoading: true,
    errMess: null,
    user: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LOGUSER:
            console.log('payload', action.payload)
            return { ...state, isLoading: false, errMess: null, user: action.payload }
        case ActionTypes.LOGGEDOUT:
            return { ...state, isLoading: false, errMess: null, user: [] }
        default:
            return state
    }
}