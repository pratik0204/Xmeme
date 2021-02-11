import faxios from '../../axios'
import {store} from '../../index'
import {getApiCall} from './getCalls'
import {MyApp} from '../../Components/snack'

const UPDATE_MEMES='UPDATE_MEMES'
const UPDATE_MEMES_SUCCESS='UPDATE_MEMES_SUCCESS'
const UPDATE_MEMES_FAILURE='UPDATE_MEMES_FAILURE'


const updateMemes=()=>{
    return{
        type:UPDATE_MEMES,
    }
}

const updateMemesSuccess=(msg)=>{
    return{
        type:UPDATE_MEMES_SUCCESS,
        payload:msg
    }
}
const updateMemesFailure=(error)=>{
    return{
        type:UPDATE_MEMES_FAILURE,
        payload:error
    }
}

export let updateApiCall=(data,id)=>{
    return (dispatch)=>{
        dispatch(updateMemes())
        faxios().patch(`/memes/${id}`,data).then(res=>{
            console.log(res)
            dispatch(updateMemesSuccess(res))  
            dispatch(getApiCall())
            // {MyApp('UPDATEed!','success')}
            
         }).catch(err=>{
             console.log(err)
             dispatch(updateMemesFailure(err))
         })
    }
}
