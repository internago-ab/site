import * as React from "react"
import { Link } from "gatsby"

import darkLogo from "../images/logo-dark.png"
import lightLogo from "../images/logo-light.png"

const Layout = ({ children }) => {

  return (
    <div className="global-wrapper">
      <nav></nav>

      <main>{children}</main>

      <footer></footer>
    </div>
  )
}

export default Layout
