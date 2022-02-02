import React, { useState } from "react"

const Posts = ({ handleInputChange }) => {

  return (
    <div className='input'>
      <input
        type="text"
        aria-label="Search"
        placeholder="Search posts.."
        onChange={handleInputChange}
      />
     
    </div>
  )
}

export default Posts
