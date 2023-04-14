import React from 'react'
import Input from '../pages/Input'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function DataForm() {
  return (
        <div>
        DataForm
        <BrowserRouter>
        <br />
        BrowserRouter
            <Routes>
                <Route path='contact' element={<div>ROOT</div>}></Route>
                <Route path='contact/input' element={<div>INPUT</div>}></Route>
            </Routes>
        </BrowserRouter>
        </div>
  )
}

export default DataForm
