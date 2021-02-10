import axios from 'axios'

export let baseURL ="http://localhost:8000";

export default ()=>{
    return axios.create({
        baseURL
    })
}