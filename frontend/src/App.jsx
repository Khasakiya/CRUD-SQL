import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import AddBook from './AddBook'
import Read from './Read'
import Edit from './Edit'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/addbook' element={<AddBook/>} />
        <Route path='/read/:id' element={<Read/>} />
        <Route path='/edit/:id' element={<Edit/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
