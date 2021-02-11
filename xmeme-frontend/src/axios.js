import axios from 'axios'

export let baseURL ="https://xmeme-pchy393-server.herokuapp.com/";

export default ()=>{
    return axios.create({
        baseURL
    })
}