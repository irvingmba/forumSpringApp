import axios from "axios";

async function postData(address, data){
    try {
        return await axios.post(address, data);
    } catch (error) {
        console.error(error);
        return {error: error.message};
    }
};

export default postData;