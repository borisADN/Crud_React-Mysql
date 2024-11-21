import React from 'react'
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './Create';
import Read from './Read';
import Edit from './Edit';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/read/:id" element={<Read />} />
      <Route path="/edit/:id" element={<Edit />} />
      {/* Add more routes here */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
    </BrowserRouter>
  )
}
