import { Route, Routes } from "react-router-dom"
import Home from "./screens/Home/Home"
import AddBlog from "./screens/AddBlog/AddBlog"

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<AddBlog/>}/>
      </Routes>
    </div>
  )
}

export default App