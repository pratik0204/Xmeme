import faxios from '../../axios'
import {store} from '../../index'
import {getApiCall} from './getCalls'
import {MyApp} from '../../Components/snack'

const POST_MEMES='POST_MEMES'
const POST_MEMES_SUCCESS='POST_MEMES_SUCCESS'
const POST_MEMES_FAILURE='POST_MEMES_FAILURE'


const postMemes=()=>{
    return{
        type:POST_MEMES,
    }
}

const postMemesSuccess=(msg)=>{
    return{
        type:POST_MEMES_SUCCESS,
        payload:msg
    }
}
const postMemesFailure=(error)=>{
    return{
        type:POST_MEMES_FAILURE,
        payload:error
    }
}

export let postApiCall=(data)=>{
    return (dispatch)=>{
        dispatch(postMemes())
        faxios().post(`/memes`,data).then(res=>{
            console.log(res)
            dispatch(postMemesSuccess(res))  
            dispatch(getApiCall())
            // {MyApp('Posted!','success')}
            
         }).catch(err=>{
             console.log(err)
             dispatch(postMemesFailure(err))
         })
    }
}
