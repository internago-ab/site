import * as React from "react"
import { Link } from "gatsby"
import "./layout.css"

import darkLogo from "../images/logo-dark.png"
import lightLogo from "../images/logo-light.png"

const Layout = ({ children }) => {

  return (
    <div className="global-wrapper">
      <nav>
        <Link to="/"><img className="logo" src={darkLogo} alt="logo"></img></Link>
        <ul className="links">
          <ul className="what-we-offer">
            <li>What we offer <svg className="toggle-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.51465 8.4652L11.9996 16.9502L20.4846 8.4652L19.0706 7.0502L11.9996 14.1222L4.92865 7.0502L3.51465 8.4652Z" fill="#4E4E4E"/></svg></li>
            <ul className="what-we-offer-submenu">
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/payroll">Payroll portal</Link></li>
            </ul>
          </ul>
          <li><Link to="/blog">Blogs and News</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><a className="portal-btn" href="https://payroll.internago.com/">Go to portal</a></li>
          <li><a className="cta-btn" href="mailto:info@internago.com">Contact us</a></li>
        </ul>
      </nav>

      <main>{children}</main>

      <footer></footer>
    </div>
  )
}

export default Layout
