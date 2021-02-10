import faxios from '../../axios'
import {store} from '../../index'

const GET_MEMES='GET_MEMES'
const GET_MEMES_SUCCESS='GET_MEMES_SUCCESS'
const GET_MEMES_FAILURE='GET_MEMES_FAILURE'


const getMemes=()=>{
    return{
        type:GET_MEMES,
    }
}

const getMemesSuccess=(memes)=>{
    return{
        type:GET_MEMES_SUCCESS,
        payload:memes
    }
}
const getMemesFailure=(error)=>{
    return{
        type:GET_MEMES_FAILURE,
        payload:error
    }
}

export let getApiCall=()=>{
    return (dispatch)=>{
        dispatch(getMemes)
        faxios().get(`/memes/?page=${store.getState().page}`).then(res=>{
            let data=res.data;
            console.log(data)
            dispatch(getMemesSuccess(data))  
         }).catch(err=>{
             console.log(err)
             dispatch(getMemesFailure(err))
         })
    }
}
