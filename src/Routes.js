import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import TodoList from './Page/TodoList'
import Calculator from './component/Calculator'
import Applications from './Page/Applications'
import Contact from './Contact'
import About from './Page/About'
import Updatepost from './component/Updatepost'
import Createpost from './component/Createpost'


const Routes = () => {
  return (
      <Switch>
        <Route path='/' element={<TodoList/>}/>
        <Route path='/calculator' element={<Calculator/>}/>
        <Route path='/apps' element={<Applications/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/updatepost' element={<Updatepost/>}/>
        <Route path='/Createpost' element={<Createpost/>}/>

      </Switch>
  )
}

export default Routes
