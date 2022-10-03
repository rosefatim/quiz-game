import { LOGIN_USER, LOGOUT_USER, ADD_ANSWERS ,REMOVE_ANSWERS} from "./action-type"

const initialState={
    user: {},
    questions:[], 
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER: 
        return {
            ...state,
            user: action.data
        }
        case LOGOUT_USER:
            return{
                ...state,
                user:{}
        }
        case ADD_ANSWERS:
        return{
            ...state,
            questions: action.data
        }
        case REMOVE_ANSWERS:
        return{
            ...state,
            questions:[]
        }
        
        default : return state;

    }

};

export default reducer;