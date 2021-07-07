import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import "./layout.css"

import darkLogo from "../images/logo-dark.svg"
import lightLogo from "../images/logo-light.svg"
import linkedin from "../images/linkedin.svg"
import twitter from "../images/twitter.svg"

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
  query bioQueryAndBioQuery {
    site {
      siteMetadata {
        social {
          twitter
          linkedin
        }
      }
    }
  }
`)

const social = data.site.siteMetadata?.social


  return (
    <div className="global-wrapper">
      <nav>
        <Link to="/"><img className="logo" src={darkLogo} alt="logo"></img></Link>
        <ul className="links">
          <ul className="what-we-offer">
            <li>What we offer <svg className="toggle-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.51465 8.4652L11.9996 16.9502L20.4846 8.4652L19.0706 7.0502L11.9996 14.1222L4.92865 7.0502L3.51465 8.4652Z" fill="#4E4E4E" /></svg></li>
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

      <footer>
        <div className="right">
          <img className="logo" src={lightLogo} alt="logo"></img>
          <div className="socials">
            <a href={`https://www.linkedin.com/company/${social?.linkedin || ``}`}><img src={linkedin} alt="linkedin"></img></a>
            <a href={`https://twitter.com/${social?.twitter || ``}`}><img src={twitter} alt="twitter"></img></a>
          </div>
          <p>
            Copyright © 2017-2019 All rights reserved to Internago AB. Contact: info@internago.com <br /><br />

            Disclaimer: Communication between you and Internago are protected by our Data Protection Policy, but your communication between our partners or lawyers is not.
            Internago provides access to independent lawyers and other requested partners to fulfil its service. We are not a law firm or a substitute for an attorney or law firm.
            We cannot provide any kind of advice, explanation, opinion, or recommendation about possible legal rights, remedies, options, or selection of forms or strategies.
            Your access to the website is subject to our Terms & Conditions.
          </p>
        </div>

        <div className="left">
          <p>Internago Sweden<br/>Tegelbacken 4A<br/>111 52 Stockholm<br/>Sweden</p>
          <p>Internago France<br/>39, Av. Pierre 1er de Serbie<br/>75008 Paris<br/>France</p>
          <p>Internago Italy<br/>Corso Vercelli, 57<br/>20144 Milano<br/>Italy</p>
        </div>

      </footer>
    </div>
  )
}

export default Layout
