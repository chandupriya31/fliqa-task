import {useSelector,useDispatch} from 'react-redux'
import {useNavigate,useParams} from 'react-router-dom'
import {useEffect} from 'react'
import { startGetIndividualPost } from '../actions/posts-action'

export default function Details(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {id} = useParams()
    const post = useSelector((state)=>{
        return state?.posts?.individualpost
    })

    useEffect(()=>{
        dispatch(startGetIndividualPost(id))
    },[])

    console.log(post)
    const handleNavigation = ()=>{
        navigate('/')
    }
    
    return (
        <div>
            <h5>Id - <strong>{post.id}</strong></h5> 
            <p>title - <strong>{post.title}</strong></p> 
            <p>Body -  <strong>{post.body}</strong></p>
            <button onClick={handleNavigation}>Back to listing</button>
        </div>
    )
}
