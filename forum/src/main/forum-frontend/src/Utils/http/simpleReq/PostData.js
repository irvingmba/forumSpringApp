import axios from "axios";
import respErrorHandler from "../../../ErrorHandling/axios/RespErrorHandler";

async function postData(address, data){
    try {
        return await axios.post(address, data);
    } catch (error) {
        return respErrorHandler(console.log, error);
    }
};

export default postData;