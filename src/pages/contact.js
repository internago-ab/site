import React from "react"
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

function Contact() {
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
      <ImageText
        active="notactive"
        size="medium"
        title="Do you prefer that we get get back to you?"
        text="You can always get in touch with Internago with any type of question – just fill in this form and we will get back to you!"
        image={devices}
      />
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" required />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" required></textarea>
          </label>
        </p>
        <p>
          <button className="cta-btn" type="submit">
            Send message
          </button>
        </p>
      </form>

      <Cta content="next" />
    </Layout>
  )
}

export default Contact
