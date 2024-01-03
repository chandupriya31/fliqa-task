const initialState = {
    postData:[],
    individualpost : {}
}

export const postsReducer = (state = initialState,action)=>{
    switch(action.type){
        case 'GET_POST_DATA':{
            return {...state,postData:action.payload}
        }
        case 'GET_INDIVIDUAL_POST':{
            return {...state,individualpost:action.payload}
        }
        default:{
            return {...state}
        }
    }
}