import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import BlogList from './pages/BlogList'
import PostDetails from './pages/PostDetails';

function App() {
  return (
    <Router>
     <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </Router>
  )
}

export default App
