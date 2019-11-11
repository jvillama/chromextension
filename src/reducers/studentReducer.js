import * as types from '../actions/types';
const initialState = [];

function studentReducer(state = initialState, action) {
    const newState = [ ...state ];
    switch(action.type) {
        case types.ADD_STUDENT:
            return [ ...newState, action.payload];

        case types.REMOVE_STUDENT:
            const studentEmail = action.payload;
            const students = newState.filter(({ email }) => email !== studentEmail);
            return [...students]

        case types.LOAD_STUDENTS_FROM_GOOGLE_SHEETS:
            return [
                ...newState,
                ...action.payload
            ]

        case types.LOAD_DATA:
            return [
                ...newState,
                ...action.students
            ]

        case types.UPDATE_STUDENT:
            const index = action.payload.studentIndex;
            const student = action.payload;
            newState[index] = student;
            return [
                ...newState
            ];
        default:
            return state;
    };
}  


export default studentReducer;