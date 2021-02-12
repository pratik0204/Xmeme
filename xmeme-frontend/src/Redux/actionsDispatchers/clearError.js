const CLEAR_ERROR='CLEAR_ERROR'

const clearError=()=>{
    return{
        type:CLEAR_ERROR,
    }
}

export let clearErrorCall=(data)=>{
    return (dispatch)=>{
        dispatch(clearError)
    }
}