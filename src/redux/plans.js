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
        // case ActionTypes.ADS_FAILED:
        //     return { ...state, isLoading: false, errMess: action.payload, ads: [], premiumAds: [] }
        default:
            return state
    }
}