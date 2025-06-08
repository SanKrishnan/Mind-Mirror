import React from 'react'

const HeaderBlog = () => {
  return (
  <header>
    <div className="top">
      <p id="head">Mind Mirror</p>
      <a id="signin" href="#">Sign In</a>
    </div>
    <div className="middle">
      <p id="subtitle">Share your thoughts with the world!</p>
      <a id="create" href="index.html">Back to Home</a>
    </div>
  </header>
  )
}

export default HeaderBlog