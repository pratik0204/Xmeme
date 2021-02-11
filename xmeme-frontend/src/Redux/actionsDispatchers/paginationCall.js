import faxios from '../../axios'
import {store} from '../../index'

const GET_PAGE='GET_PAGE'
const GET_PAGE_SUCCESS='GET_PAGE_SUCCESS'
const GET_PAGE_FAILURE='GET_PAGE_FAILURE'


const getPage=()=>{
    return{
        type:GET_PAGE
    }
}

const getPageSuccess=(page)=>{
    return{
        type:GET_PAGE_SUCCESS,
        payload:page
    }
}

export let getPageCall=(page_number)=>{
    return (dispatch)=>{
        dispatch(getPage)
        dispatch(getPageSuccess(page_number))
    }
}
