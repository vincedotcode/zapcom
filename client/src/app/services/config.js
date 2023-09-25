import baseAxios from "axios";

const axios = baseAxios.create({
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axios;