import React from 'react'
import {Button} from './components/ui/button'
import Login from './pages/Login'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Register from './pages/Register'
import Home from './pages/Home'
import DevConsole from './pages/devConsole'
const App = () => {
  return (
        <div >
          <Router>
            <Routes>
              <Route path='/' element= {<Home/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/devConsole' element={<DevConsole/>}/>
            </Routes>
          </Router>
      </div>
  )
}

export default App