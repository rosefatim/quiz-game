import { LOGIN_USER,LOGOUT_USER,ADD_ANSWERS } from "./action-type";

const addUserData = (data) => ({
    type: LOGIN_USER,
    data: data
});
const removeUserData = (data) => ({
    type: LOGOUT_USER,
});
const addUserAnswers = (data) => ({
    type: ADD_ANSWERS,
    data: data
});

export { addUserData, removeUserData, addUserAnswers }