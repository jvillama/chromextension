import * as types from '../actions/types';

const initialState = {
    tutorName: '',
    rosterName: '',
    googleSheetUrl: ''
};



function tutorReducer(state = initialState, action) {
    const newState = { ...state };

    switch(action.type) {
        case types.TUTOR_GOOGLE_SHEET_URL:
           newState.googleSheetUrl = action.payload;
            return { ...newState };

        case types.TUTOR_NAME:
            newState.tutorName = action.payload;
            return { ...newState }

        case types.TUTOR_ROSTER_NAME:
            newState.rosterName = action.payload;
            return { ...newState }
    
        default:
            return state;
    };
}  


export default tutorReducer;