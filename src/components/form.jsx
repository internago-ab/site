import React from "react"
import { useEffect } from "react"

import Aos from "aos"
import "aos/dist/aos.css"
import "./form.css"

function Form() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <section className="section small form-main form-demo-header landing">
      <h2 className="form-header heading">Submit a request</h2>
      <form
        id="form"
        name="contact"
        className="formBox"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/thank-you"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className="form-flex">
          <p className="input-field input-name">
            <input type="text" id="name" name="name" placeholder=" " required />
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
            <label htmlFor="email" className="email-label">
              E-mail
            </label>{" "}
          </p>
        </div>

        <p className="input-field input-text">
          <textarea id="message" name="message" required></textarea>
          <label htmlFor="message" className="inputField messageField">
            Message
          </label>{" "}
        </p>
        <p className="btn-form-main">
          <input type="submit" value="Send Message" className="formButton" />
        </p>
      </form>
    </section>
  )
}

export default Form
