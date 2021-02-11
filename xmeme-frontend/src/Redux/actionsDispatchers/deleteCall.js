import faxios from '../../axios'
import {getApiCall} from './getCalls'

const DELETE_MEMES='DELETE_MEMES'
const DELETE_MEMES_SUCCESS='DELETE_MEMES_SUCCESS'
const DELETE_MEMES_FAILURE='DELETE_MEMES_FAILURE'


const deleteMemes=()=>{
    return{
        type:DELETE_MEMES
    }
}

const deleteMemesSuccess=()=>{
    return{
        type:DELETE_MEMES_SUCCESS,
    }
}
const deleteMemesFailure=(error)=>{
    return{
        type:DELETE_MEMES_FAILURE,
        payload:error
    }
}

export let deleteApiCall=(id)=>{
    return (dispatch)=>{
        dispatch(deleteMemes())
        faxios().delete(`/memes/${id}`).then(res=>{
            console.log(res)
            dispatch(deleteMemesSuccess())  
            dispatch(getApiCall())
         }).catch(err=>{
             console.log(err)
             dispatch(deleteMemesFailure(err))
         })
    }
}
