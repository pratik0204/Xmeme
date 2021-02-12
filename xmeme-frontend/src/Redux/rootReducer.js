import {store} from '../index'
const initState={
    count:0,
    page:1,
    next:null,
    prev:null,
    loading:false,
    error:[],
    search:'',
    memes:[]
}

const GET_MEMES='GET_MEMES'
const GET_MEMES_SUCCESS='GET_MEMES_SUCCESS'
const GET_MEMES_FAILURE='GET_MEMES_FAILURE'

const GET_PAGE='GET_PAGE'
const GET_PAGE_SUCCESS='GET_PAGE_SUCCESS'

const POST_MEMES='POST_MEMES'
const POST_MEMES_SUCCESS='POST_MEMES_SUCCESS'
const POST_MEMES_FAILURE='POST_MEMES_FAILURE'

const DELETE_MEMES='DELETE_MEMES'
const DELETE_MEMES_SUCCESS='DELETE_MEMES_SUCCESS'
const DELETE_MEMES_FAILURE='DELETE_MEMES_FAILURE'

const SEARCH_INITIATED='SEARCH'

const UPDATE_MEMES='UPDATE_MEMES'
const UPDATE_MEMES_SUCCESS='UPDATE_MEMES_SUCCESS'
const UPDATE_MEMES_FAILURE='UPDATE_MEMES_FAILURE'

const CLEAR_ERROR='CLEAR_ERROR'

const rootReducer=(state=initState,action)=>{

    switch(action.type){
        case GET_MEMES:
            return{
                ...state,
                loading:true
            }
        
        case GET_MEMES_SUCCESS:
            return{
                ...state,
                loading:false,
                count:action.payload.count,
                memes:action.payload.results,
                error:''
            }
        
        case GET_MEMES_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload.data
            }
        
        case GET_PAGE:
            return{
                ...state,
                loading:true
            }
        
        case GET_PAGE_SUCCESS:
            return{
                ...state,
                loading:false,
                page:action.payload
            }
        
        case POST_MEMES:
            return{
                ...state,
                loading:true
            }
        
        case POST_MEMES_SUCCESS:
            return{
                ...state,
                loading:false,
                error:'',
            }
        
        case POST_MEMES_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload.data
            }
        
        case DELETE_MEMES:
            return{
                ...state,
                loading:true
            }
        
        case DELETE_MEMES_SUCCESS:
            return{
                ...state,
                loading:false,
                error:''
            }
        
        case DELETE_MEMES_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload.data
            }
        
        case SEARCH_INITIATED:
            return{
                ...state,
                search:action.payload
            }
        
        case UPDATE_MEMES:
            return{
                ...state,
                loading:true
            }
        
        case UPDATE_MEMES_SUCCESS:
            return{
                ...state,
                loading:false,
                error:''
            }
        
        case UPDATE_MEMES_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload.data
            }
        
        case CLEAR_ERROR:
            return{
                ...state,
                error:''
            }
        
        default:
            return state
        
    }
}

export default rootReducer;