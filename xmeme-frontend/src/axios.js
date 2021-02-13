import axios from 'axios'

export let baseURL ="http://pchy393-xmeme-server.herokuapp.com";

export default ()=>{
    return axios.create({
        baseURL
    })
}