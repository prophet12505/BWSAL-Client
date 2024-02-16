import React from 'react'
import './nav.css'
const nav = () => {
  return (
    <div> 
      <nav id="main-nav">
        <div><a href="./">Home</a></div>
        <div><a href="./media">Media</a></div>
        <div><a href="./blog">Blog</a></div>
      </nav>
    </div>
  )
}

export default nav