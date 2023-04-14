import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function DataForm() {
  return (
        <div>
        DataForm
        <BrowserRouter>
        <br />
        <Link to='/contact/input'>INPUT</Link>
        BrowserRouter
            <Routes>
                <Route path='/contact' element={<div>ROOT</div>}></Route>
                <Route path='/contact/input' element={<div>INPUT GOES HERE!</div>}></Route>
            </Routes>
        </BrowserRouter>
        </div>
  )
}

export default DataForm
