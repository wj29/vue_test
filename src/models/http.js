import axios from "axios";

const get = function (url, params) {
    return  axios.get(url, params).then(function (response) {
        console.log("resp", response)
    }).catch(function (error) {
        console.log("error", error)
    }).finally()
};
export default { get };
