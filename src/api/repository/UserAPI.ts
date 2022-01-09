import AxiosAPI from "../config";
import UserAPI from "../../interface/api/UserAPI";

const resource = "user";

const getProfile = () => {
    return AxiosAPI(true).get(`${resource}/profile`);
};
const getUsers = () => {
    return AxiosAPI(false).get(`${resource}/list`);
};
const getUser = (id: String) => {
    return AxiosAPI(false).get(`${resource}/user/${id}`);
};
const addFriend = (idFriend: String) => {
    return AxiosAPI(true).post(`${resource}/add-friend`, {
        idFriend: idFriend,
    });
};
const unfriend = (idFriend: String) => {
    return AxiosAPI(true).post(`${resource}/unfriend`, {
        idFriend: idFriend,
    });
};
const acceptFriend = (idFriend: String) => {
    return AxiosAPI(true).post(`${resource}/accep-friend`, {
        idFriend: idFriend,
    });
};
const getChatUser = (idFriend: string) => {
    return AxiosAPI(true).get(`${resource}/chat/${idFriend}`);
};
const getChatMessage = (idFriend: string) => {
    return AxiosAPI(true).get(`${resource}/message/${idFriend}`);
};
const userAPI: UserAPI = {
    getProfile,

    getUsers,
    getUser,
    addFriend,
    unfriend,
    acceptFriend,
    getChatUser,
    getChatMessage,
};
export default userAPI;
