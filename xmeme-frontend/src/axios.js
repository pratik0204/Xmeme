import axios from 'axios'

export let baseURL ="https://stark-springs-37952.herokuapp.com/";

export default ()=>{
    return axios.create({
        baseURL
    })
}