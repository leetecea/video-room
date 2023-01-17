import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import Room from '../pages/Room'
import ErrorPage from '../pages/ErrorPage'

export default function routes(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/room/:id" element={<Room/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </Router>
  )
}