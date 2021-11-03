import React from "react"
import { useState } from "react"
import "../components/contact.css"
//components
import Layout from "../components/layout"
import Seo from "../components/seo"
import Blue from "../components/blue"
import Cta from "../components/cta"
import ImageText from "../components/imagetext"
import ContactIcon from "../components/contact-icon"
import Grey from "../components/grey"
//images
import devices from "../images/illustrations/contact-devices.png"
//icons
import board from "../images/icons/board.png"
import puzzle from "../images/icons/puzzle.png"
import mailbox from "../images/icons/mailbox.png"
//flags
import sweden from "../images/flags/sweden.png"
import finland from "../images/flags/finland.png"
import spain from "../images/flags/spain.png"
import france from "../images/flags/france.png"

function Contact() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Layout>
      <Seo title="Contact" />
      <Blue>
        <h1>Contact us</h1>
        <p>
          We are happy to hear from you, and our team is ready to assist you
          with any question you might have.
        </p>
      </Blue>
      <Grey>
        <div className="section">
          <ContactIcon
            content={[
              {
                icon: board,
                header: "Contact Sales",
                text:
                  "If you want to know more about our services, book a demo or have any other questions – please contact our sales department",
                button: "Contact Sales",
                link: "mailto:sales@internago.com",
              },
              {
                icon: puzzle,
                header: "Contact Support",
                text:
                  "If you have a question regarding our software, if you have forgotten your login or any other questions – please contact our support",
                button: "Contact Support",
                link: "mailto:support@internago.com",
              },
              {
                icon: mailbox,
                header: "Partner request",
                text:
                  "If you are a potential partner to Internago and want to know how to enter in our network. Please drop us an email to get in touch",
                button: "Contact Management",
                link: "mailto:info@internago.com",
              },
            ]}
          />
        </div>
      </Grey>
      <section className="collapse section medium">
        <button className="collapse-btn" onClick={() => setIsOpen(!isOpen)}>
          show list of emails for our main markets
        </button>
        <div className={isOpen ? "collapse-content show" : "collapse-content"}>
          <ul>
            <li>
              <img src={finland} />
              <a href="mailto:finland@internago.com">Finland</a>
            </li>
            <li>
              <img src={france} />
              <a href="mailto:finland@internago.com">France</a>
            </li>
            <li>Germany</li>
            <li>
              <img src={spain} />
              <a href="mailto:finland@internago.com">Spain</a>
            </li>
            <li>
              <img src={sweden} />
              <a href="mailto:finland@internago.com">Sweden</a>
            </li>
          </ul>
        </div>
      </section>
      <ImageText
        active="notactive"
        size="medium"
        title="Do you prefer that we get get back to you?"
        text="You can always get in touch with Internago with any type of question – just fill in this form and we will get back to you!"
        image={devices}
      />
      <section class="section medium">
      <form
        name="contact"
        className="formBox"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="contact" value="contact" />
        <p>
          <label htmlFor="name" className="inputField"></label> <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
        </p>
        <p>
          <label htmlFor="email" className="inputField"></label> <br />
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            required
          />
        </p>
        <p>
          <label htmlFor="message" className="inputField messageField"></label>{" "}
          <br />
          <textarea
            id="message"
            placeholder="Message"
            name="message"
            required
          ></textarea>
        </p>
        <p>
          <input type="submit" value="SEND" className="formButton" />
        </p>
      </form>
       
      </section>
      <Cta content="next" />
    </Layout>
  )
}

export default Contact
