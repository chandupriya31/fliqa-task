import {createStore,combineReducers,applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
import { postsReducer } from '../redux-reducer/postsReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
       posts: postsReducer
    }), applyMiddleware(thunk))
    return store
}
 
 export default configureStore