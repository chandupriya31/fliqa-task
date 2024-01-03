import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {startGetIndividualPost} from '../actions/posts-action'
export default function Home(){
    const dispatch = useDispatch()
    const posts = useSelector((state)=>{
        return state?.posts?.postData
    })
    console.log(posts)
    const handleView = (id)=>{
        dispatch(startGetIndividualPost(id))
    }
    return (
        <div>
            <h3>Listing Posts - {posts.length}</h3>
            {posts.map(postData =>{
                return (
                    <ul key={postData.id}>
                        <li><Link to={`/details/${postData.id}`} onClick={()=>handleView(postData.id)}>{postData.title}</Link></li>
                    </ul>
                )
            })}
        </div>
    )
}