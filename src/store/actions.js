import { LOGIN_USER,LOGOUT_USER } from "./action-type";

const addUserData = (data) => ({
    type: LOGIN_USER,
    data: data
});
const removeUserData = (data) => ({
    type: LOGOUT_USER,
});

export { addUserData, removeUserData }