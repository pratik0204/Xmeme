
const initState={
    count:0,
    page:1,
    next:null,
    prev:null,
    loading:false,
    error:'',
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
                error:action.payload
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
                error:action.payload
            }

        default:
            return state
        
    }
}

export default rootReducer;