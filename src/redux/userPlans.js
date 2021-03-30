import * as ActionTypes from './ActionTypes'

export const userPlans = (state = {
    errMess: null,
    userPlans: [],
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_USERPLANS:
            return { ...state, errMess: null, userPlans: action.payload }
        // case ActionTypes.ADS_LOADING:
        //     return { ...state, isLoading: true, errMess: null, ads: [], premiumAds: [] }
        case ActionTypes.FAILED_USERPLANS:
            return { ...state, errMess: action.payload, userPlans: [] }
        default:
            return state
    }
}