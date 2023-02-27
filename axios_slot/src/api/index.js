import axios from 'axios';

const config = {
    baseUrl : 'http://192.168.143.81:3000'
}

function fetchBoxList(){
    return axios.get(`${config.baseUrl}/eventlevel`)
}

export {

    fetchBoxList
}