import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import "./layout.css"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import darkLogo from "../images/logo-dark.svg"
import lightLogo from "../images/logo-light.svg"
import linkedin from "../images/linkedin.svg"
import twitter from "../images/twitter.svg"

const Layout = ({ children }) => {
  const [menuDisplayed, setMenuDisplayed] = useState(false)

  const [visible, setVisible] = useState(true)

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

  // function debounce(func, wait, immediate) {
  //   var timeout
  //   return function () {
  //     var context = this,
  //       args = arguments
  //     var later = function () {
  //       timeout = null
  //       if (!immediate) func.apply(context, args)
  //     }
  //     var callNow = immediate && !timeout
  //     clearTimeout(timeout)
  //     timeout = setTimeout(later, wait)
  //     if (callNow) func.apply(context, args)
  //   }
  // }
  // const handleScroll = debounce(() => {
  //   const currentScrollPos = window.pageYOffset

  //   setVisible(
  //     (prevScrollPos > currentScrollPos &&
  //       prevScrollPos - currentScrollPos > 200) ||
  //       currentScrollPos < 10
  //   )

  //   setPrevScrollPos(currentScrollPos)
  // }, 50)

  // // new useEffect:
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll)

  //   return () => window.removeEventListener("scroll", handleScroll)
  // }, [prevScrollPos, visible, handleScroll])

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
            style={{
              top: visible ? "69px" : "-69px",
              overflow: menuDisplayed ? "unset" : "hidden",
              height: menuDisplayed ? 300 : 0,
            }}
          >
            <li>
              <Link
                to="/"
                className={`${menuDisplayed ? "li-active" : "li-not-active"}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={`${menuDisplayed ? "li-active" : ""}`}
              >
                Payroll services
              </Link>
            </li>
            <li>
              <Link
                to="/payroll"
                className={`${menuDisplayed ? "li-active" : ""}`}
              >
                Payroll portal
              </Link>
            </li>
            <li>
              <a href="/blog" className={`${menuDisplayed ? "li-active" : ""}`}>
                Blogs and QA
              </a>
            </li>
            <li>
              <Link
                to="/about"
                className={`${menuDisplayed ? "li-active" : ""}`}
              >
                About us
              </Link>
            </li>
            <ul
              className={`${
                menuDisplayed ? "li-active" : ""
              } menu what-we-offer`}
            >
              <li className="has-dropdown what-we-offer">
                <li className="menu-link">
                  Countries{" "}
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

                <ul className="submenu">
                  <li className="has-dropdown menu-link">
                    <li>
                      <Link to="/belgium">Belgium</Link>
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
                    <li>
                      <Link to="/uk">Uk</Link>
                    </li>
                  </li>
                </ul>
              </li>
            </ul>
            <li>
              <Link
                to="/contact"
                className={`${menuDisplayed ? "li-active" : ""}`}
              >
                Contact us
              </Link>
            </li>
            <li>
              <a
                href="https://payroll.internago.com/"
                className={`${menuDisplayed ? "li-active" : ""}`}
              >
                Go to portal
              </a>
            </li>
          </ul>
        </div>

        <ul className="desktop-menu">
          <ul className="menu what-we-offer">
            <li className="has-dropdown what-we-offer">
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

              <ul className="submenu">
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/payroll">Payroll portal</Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="menu what-we-offer">
            <li className="has-dropdown what-we-offer">
              <li className="menu-link">
                Countries{" "}
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

              <ul className="submenu">
                <li>
                  <Link to="/belgium">Belgium</Link>
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
                <li>
                  <Link to="/uk">United Kingdom</Link>
                </li>
              </ul>
            </li>
          </ul>
          <li>
            <a href="/blog">Blogs and QA</a>
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

      <motion.main
        initial={{
          opacity: 0,
          x: -200,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        exit={{
          opacity: 0,
          x: 200,
        }}
        transition={{
          type: "spring",
          mass: 0.35,
          stiffness: 75,
          duration: 0.3,
        }}
      >
        <main>{children}</main>
      </motion.main>

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
          Copyright © 2017-<span>{new Date().getFullYear()}</span> All rights
          reserved to Internago AB. Contact: info@internago.com <br />
          <br />
          Disclaimer: Communication between you and Internago are protected by
          our Data Protection Policy, but your communication between our
          partners or lawyers is not. Internago provides access to independent
          lawyers and other requested partners to fulfil its service. We are not
          a law firm or a substitute for an attorney or law firm. We cannot
          provide any kind of advice, explanation, opinion, or recommendation
          about possible legal rights, remedies, options, or selection of forms
          or strategies.
          <br /> <br />
          <a href="/privacy-policy" className="white-link">
            Data and privacy policy
          </a>
        </p>
      </footer>
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
