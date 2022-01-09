import Api from "../interface/api";
import userAPI from "./repository/UserAPI";

const API: Api = {
    user: userAPI,
};

export default API;
