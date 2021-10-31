import React from "react"

import "./grey.css"

function Grey({ children}) {

  return (
    <section className="grey-top">
      <div className='section grey-inside'>
      {children}
      </div>
    </section>
  )
}

export default Grey
