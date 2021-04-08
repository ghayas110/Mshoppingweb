import * as ActionTypes from './ActionTypes'

export const childs = (state = {
    isLoading: true,
    errMess: null,
    childs: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CHILD:
            console.log('payload', action.payload)
            return { ...state, isLoading: false, errMess: null, childs: action.payload }
        case ActionTypes.FAILED_CHILD:
            return { ...state, isLoading: false, errMess: action.payload, childs: [] }
        default:
            return state
    }
}