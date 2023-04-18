import React from "react"
import { useEffect } from "react"

import "./form.css"

function Form() {
  return (
    <section className="section  form-demo-header">
      <h2 className="form-header heading">
      Let’s chat about your payroll needs
      </h2>
      <form
        id="formDemo"
       
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
          <textarea id="message" name="message" className="textarea" required></textarea>
          <label htmlFor="message" className="inputField messageField">
            Message
          </label>{" "}
        </p>
        <p className="form-privacy">We value your privacy and we’ll only send you relevant information. 
For full details, check out our privacy policy</p>
        <p className="btn-form-main">
          <input type="submit" value="Book a demo" className="formButton" />
        </p>
      </form>
    </section>
  )
}

export default Form
