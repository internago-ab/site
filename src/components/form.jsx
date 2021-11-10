import React from "react"
import { useEffect } from "react"

import Aos from "aos"
import "aos/dist/aos.css"
import "./form.css"

function Form({ children }) {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
       <section className="section small">
       <h2 className='form-header heading'>Submit a request</h2>
        <form
          name="contact"
          className="formBox"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/thank-you"
        >
          <input type="hidden" name="form-name" value="contact" />
         
            <p className="input-field input-name">
              <input
                type="text"
                id="name"
                name="name"
                placeholder=" "
                required
              />
              <label htmlFor="name" className="test">
                Subject
              </label>{" "}
            </p>
            <p className="input-field input-mail">
              <input
                type="email"
                id="email"
                name="email"
                placeholder=" "
                required
              />
              <label htmlFor="email" className="testa">
                Mail
              </label>{" "}
            </p>
         
          <p className="input-field input-text">
            <textarea id="message" name="message" required></textarea>
            <label htmlFor="message" className="inputField messageField">
              Message
            </label>{" "}
          </p>
          <p>
            <input type="submit" value="Send Message" className="formButton" />
          </p>
        </form>
      </section>
  )
}

export default Form
