import axios from 'axios'

export const startGetPosts = ()=>{
    return async(dispatch)=>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        dispatch(getPostData(response.data))
    }
}

const getPostData = (data)=>{
    return {type:'GET_POST_DATA',payload:data}
}

export const startGetIndividualPost = (id)=>{
    return async(dispatch)=>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        dispatch(getIndividualPost(response.data))
    }
}

const getIndividualPost = (data)=>{
    return {type:'GET_INDIVIDUAL_POST',payload:data}
}