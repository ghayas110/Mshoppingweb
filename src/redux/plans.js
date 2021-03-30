import * as ActionTypes from './ActionTypes'

export const plans = (state = {
    errMess: null,
    plans: [],
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PLANS:
            return { ...state, errMess: null, plans: action.payload }
        // case ActionTypes.ADS_LOADING:
        //     return { ...state, isLoading: true, errMess: null, ads: [], premiumAds: [] }
        case ActionTypes.FAILED_PLANS:
            return { ...state, errMess: action.payload, plans: [] }
        default:
            return state
    }
}