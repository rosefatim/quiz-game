import { LOGIN_USER,LOGOUT_USER,ADD_ANSWERS,REMOVE_ANSWERS } from "./action-type";

const addUserData = (data) => ({
    type: LOGIN_USER,
    data: data
});
const removeUserData = () => ({
    type: LOGOUT_USER,
});
const addUserAnswers = (data) => ({
    type: ADD_ANSWERS,
    data: data
});
const removeUserAnswers = () => ({
    type: REMOVE_ANSWERS,
 
});

export { addUserData, removeUserData, addUserAnswers, removeUserAnswers }