import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import './App.css';
import Home from './components/Home';
import Details from './components/Details'
import {startGetPosts} from './actions/posts-action.js'

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    (async()=>{
      dispatch(startGetPosts())
    })()
  },[])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/details/:id' element = {<Details/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
