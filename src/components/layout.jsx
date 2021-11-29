import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import "./layout.css"

import darkLogo from "../images/logo-dark.svg"
import lightLogo from "../images/logo-light.svg"
import linkedin from "../images/linkedin.svg"
import twitter from "../images/twitter.svg"

const Layout = ({ children }) => {
  const [menuDisplayed, setMenuDisplayed] = useState(false)

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

  function toggleMenu() {
    setMenuDisplayed(!menuDisplayed)
    animateHamburger()
  }

  function animateHamburger() {
    let lines = Array.from(document.querySelectorAll(".hamburger div"))
    lines.forEach(
      line =>
        (line.style.animation = `${line.className} 0.5s ease ${
          menuDisplayed ? "reverse" : "normal"
        }`)
    )
  }

  return (
    <div className="global-wrapper">
      <nav>
        <Link to="/" className="logo-link">
          <img className="logo" src={darkLogo} alt="logo"></img>
        </Link>

        <div className="mobile">
          <button
            className="hamburger"
            onClick={toggleMenu}
            aria-label="hamburger-menu"
          >
            <div
              className="line1"
              style={{
                transform: menuDisplayed
                  ? "translateY(9px) rotate(45deg)"
                  : "translateY(0px) rotate(0deg)",
              }}
              onAnimationEnd={e => (e.target.style.animation = "none")}
            ></div>
            <div
              className="line2"
              style={{ opacity: menuDisplayed ? 0 : 1 }}
              onAnimationEnd={e => (e.target.style.animation = "none")}
            ></div>
            <div
              className="line3"
              style={{
                transform: menuDisplayed
                  ? "translateY(-9px) rotate(-45deg)"
                  : "translateY(0px) rotate(0deg)",
              }}
              onAnimationEnd={e => (e.target.style.animation = "none")}
            ></div>
          </button>

          <ul
            className="mobile-menu"
            style={{ height: menuDisplayed ? 240 : 0 }}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/payroll">Payroll portal</Link>
            </li>
            <li>
              <Link to="/blog?filter=all">Blogs and News</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <ul class="menu what-we-offer">
              <li class="has-dropdown what-we-offer">
                <li className="menu-link">
                  What we offer{" "}
                  <svg
                    className="toggle-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.51465 8.4652L11.9996 16.9502L20.4846 8.4652L19.0706 7.0502L11.9996 14.1222L4.92865 7.0502L3.51465 8.4652Z"
                      fill="#4E4E4E"
                    />
                  </svg>
                </li>

                <ul class="submenu">
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/payroll">Payroll portal</Link>
                  </li>
                  <li class="has-dropdown menu-link">
                    Countries
                    <svg
                      className="toggle-icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.51465 8.4652L11.9996 16.9502L20.4846 8.4652L19.0706 7.0502L11.9996 14.1222L4.92865 7.0502L3.51465 8.4652Z"
                        fill="#4E4E4E"
                      />
                    </svg>
                    <ul class="submenu">
                      <li>
                        <Link to="/belgium">Belgium</Link>
                      </li>
                      <li>
                        <Link to="/england">England</Link>
                      </li>
                      <li>
                        <Link to="/finland">Finland</Link>
                      </li>
                      <li>
                        <Link to="/france">France</Link>
                      </li>
                      <li>
                        <Link to="/germany">Germany</Link>
                      </li>
                      <li>
                        <Link to="/hungary">Hungary</Link>
                      </li>
                      <li>
                        <Link to="/italy">Italy</Link>
                      </li>
                      <li>
                        <Link to="/netherlands">Netherlands</Link>
                      </li>
                      <li>
                        <Link to="/portugal">Portugal</Link>
                      </li>
                      <li>
                        <Link to="/spain">Spain</Link>
                      </li>
                      <li>
                        <Link to="/sweden">Sweden</Link>
                      </li>
                      <li>
                        <Link to="/switzerland">Switzerland</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            <li>
              <a href="https://payroll.internago.com/">Go to portal</a>
            </li>
          </ul>
        </div>

        <ul className="desktop-menu">
          <ul class="menu what-we-offer">
            <li class="has-dropdown what-we-offer">
              <li className="menu-link">
                What we offer{" "}
                <svg
                  className="toggle-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.51465 8.4652L11.9996 16.9502L20.4846 8.4652L19.0706 7.0502L11.9996 14.1222L4.92865 7.0502L3.51465 8.4652Z"
                    fill="#4E4E4E"
                  />
                </svg>
              </li>

              <ul class="submenu">
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/payroll">Payroll portal</Link>
                </li>
                <li class="has-dropdown menu-link">
                  Countries
                  <svg
                    className="toggle-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.51465 8.4652L11.9996 16.9502L20.4846 8.4652L19.0706 7.0502L11.9996 14.1222L4.92865 7.0502L3.51465 8.4652Z"
                      fill="#4E4E4E"
                    />
                  </svg>
                  <ul class="submenu">
                    <li>
                      <Link to="/belgium">Belgium</Link>
                    </li>
                    <li>
                      <Link to="/england">England</Link>
                    </li>
                    <li>
                      <Link to="/finland">Finland</Link>
                    </li>
                    <li>
                      <Link to="/france">France</Link>
                    </li>
                    <li>
                      <Link to="/germany">Germany</Link>
                    </li>
                    <li>
                      <Link to="/hungary">Hungary</Link>
                    </li>
                    <li>
                      <Link to="/italy">Italy</Link>
                    </li>
                    <li>
                      <Link to="/netherlands">Netherlands</Link>
                    </li>
                    <li>
                      <Link to="/portugal">Portugal</Link>
                    </li>
                    <li>
                      <Link to="/spain">Spain</Link>
                    </li>
                    <li>
                      <Link to="/sweden">Sweden</Link>
                    </li>
                    <li>
                      <Link to="/switzerland">Switzerland</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <li>
            <Link to="/blog?filter=all">Blogs and News</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="cta-btn">
            <a href="https://payroll.internago.com/">Go to portal</a>
          </li>
        </ul>
      </nav>

      <main>{children}</main>

      <footer>
        <div className="footer-flex">
          <div className="left">
            <img className="logo" src={lightLogo} alt="logo"></img>
            <div className="socials">
              <a
                href={`https://www.linkedin.com/company/${
                  social?.linkedin || ``
                }`}
              >
                <img src={linkedin} alt="linkedin"></img>
              </a>
              <a href={`https://twitter.com/${social?.twitter || ``}`}>
                <img src={twitter} alt="twitter"></img>
              </a>
            </div>
          </div>

          <div className="right">
            <p>
              Internago Sweden
              <br />
              Tegelbacken 4A
              <br />
              111 52 Stockholm
              <br />
              Sweden
            </p>
            <p>
              Internago France
              <br />
              39, Av. Pierre 1er de Serbie
              <br />
              75008 Paris
              <br />
              France
            </p>
            <p>
              Internago Italy
              <br />
              Corso Vercelli, 57
              <br />
              20144 Milano
              <br />
              Italy
            </p>
          </div>
        </div>

        <p className="disclaimer">
          Copyright © 2017-2019 All rights reserved to Internago AB. Contact:
          info@internago.com <br />
          <br />
          Disclaimer: Communication between you and Internago are protected by
          our Data Protection Policy, but your communication between our
          partners or lawyers is not. Internago provides access to independent
          lawyers and other requested partners to fulfil its service. We are not
          a law firm or a substitute for an attorney or law firm. We cannot
          provide any kind of advice, explanation, opinion, or recommendation
          about possible legal rights, remedies, options, or selection of forms
          or strategies. Your access to the website is subject to our Terms &
          Conditions.
        </p>
      </footer>
    </div>
  )
}

export default Layout
