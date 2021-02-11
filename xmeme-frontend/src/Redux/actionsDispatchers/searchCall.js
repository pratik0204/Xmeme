import {getApiCall} from '../actionsDispatchers/getCalls'

const SEARCH_INITIATED='SEARCH'

const searchPage=(text)=>{
    return{
        type:'SEARCH',
        payload:text
    }
}

export let searchMemeCall=(text)=>{
    return (dispatch)=>{
        dispatch(searchPage(text))
    }
}
