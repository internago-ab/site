import React, { useEffect } from "react"
import "../components/contact.css"
import "../components/contact-flags.css"
//components
import Layout from "../components/layout"
import Seo from "../components/seo"
import Blue from "../components/blue"
import Cta from "../components/cta"
import ImageText from "../components/imagetext"
import ContactIcon from "../components/contact-icon"
import Grey from "../components/grey"
import Form from "../components/form"
import Accordion from "../components/accordion"
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
import italy from "../images/flags/italy.png"
import germany from "../images/flags/germany.png"
import netherlands from "../images/flags/netherlands.png"
import belgium from "../images/flags/belgium.png"
import switzerland from "../images/flags/switzerland.png"
import portugal from "../images/flags/portugal.png"
import hungary from "../images/flags/hungary.png"
import uk from "../images/flags/uk.png"
//animation
import Aos from "aos"
import "aos/dist/aos.css"

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <Layout>
      <Seo title="Contact" />
      <Blue>
        <h1>Contact us</h1>
        <p>
          We are happy to hear from you, and our team is ready to assist you
          with any question you might have
        </p>
      </Blue>
      <Grey>
        <div className="section">
          <ContactIcon
            content={[
              {
                icon: board,
                alt: "dartboard icon",
                header: "Contact Sales",
                text:
                  "If you want to know more about our services, book a demo or have any other questions – please contact our sales department",
                button: "Contact Sales",
                link: "mailto:sales@internago.com",
              },
              {
                icon: puzzle,
                alt: "jigsaw puzzle piece icon",
                header: "Contact Support",
                text:
                  "If you have a question regarding our software, forgotten your login details or any other related questions - please contact our support.",
                button: "Contact Support",
                link: "mailto:support@internago.com",
              },
              {
                icon: mailbox,
                alt: "mailbox icon",
                header: "Partner request",
                text:
                  "If you are a potential partner to Internago and are interested in joining our network - please send us an email to get in touch.",
                button: "Contact Management",
                link: "mailto:info@internago.com",
              },
            ]}
          />
        </div>
      </Grey>
      <section className="section medium ">
        <div className="section-top">
          <div className="header-text" data-aos="fade-in">
            <h2>Emails for our main markets</h2>
          </div>
          <ul className="flags-grid" data-aos="fade-in">
            <li>
              <img src={belgium} alt="flag-belgium" />
              <a href="mailto:belgium@internago.com">belgium@internago.com</a>
            </li>
            <li>
              <img src={finland} alt="flag-finland" />
              <a href="mailto:finland@internago.com">finland@internago.com</a>
            </li>
            <li>
              <img src={france} alt="flag-france" />
              <a href="mailto:france@internago.com">france@internago.com</a>
            </li>
            <li>
              <img src={germany} alt="flag-germany" />
              <a href="mailto:germany@internago.com">germany@internago.com</a>
            </li>
            <li>
              <img src={hungary} alt="flag-hungary" />
              <a href="mailto:hungary@internago.com">hungary@internago.com</a>
            </li>
            <li>
              <img src={italy} alt="flag-italy" />
              <a href="mailto:italy@internago.com">italy@internago.com</a>
            </li>
            <li>
              <img src={netherlands} alt="netherlands-netherlands" />
              <a href="mailto:netherlands@internago.com">
                netherlands@internago.com
              </a>
            </li>
            <li>
              <img src={portugal} alt="flag-portugal" />
              <a href="mailto:portugal@internago.com">portugal@internago.com</a>
            </li>
            <li>
              <img src={spain} alt="flag-spain" />
              <a href="mailto:spain@internago.com">spain@internago.com</a>
            </li>
            <li>
              <img src={sweden} alt="flag-sweden" />
              <a href="mailto:sweden@internago.com">sweden@internago.com</a>
            </li>
            <li>
              <img src={switzerland} alt="flag-switzerland" />
              <a href="mailto:switzerland@internago.com">
                switzerland@internago.com
              </a>
            </li>
            <li>
              <img src={uk} alt="flag-uk" />
              <a href="mailto:uk@internago.com">uk@internago.com</a>
            </li>
          </ul>
        </div>
      </section>
      <section className="medium section-top bg-light-blue">
        <div className="header-text" data-aos="fade-up">
          <h2>Frequently Asked Questions</h2>
          <p className="white">
            We get many questions from our customers, and we have collected the
            most common ones here for you with a suggested solution
          </p>
        </div>
        <div className="accordion-grid">
          <Accordion
            title="Can we try the portal before deciding to move to a digital solution?"
            content="Yes, we always offer a trial period to our customers who are interested in testing how they can optimize their administration of their international business. ."
          />
          <Accordion
            title="I need support in finding a business partner, do you provide those services as well?
        "
            content="Yes! Internago is not only specialized in administrative tasks and payroll services, we also offer a wide range of business development services for our clients. It often goes hand in hand with a new establishment, or it can be a separate project."
          />
          <Accordion
            title="We need to open up a business and hire personnel but don't know the costs?"
            content="Internago can support you with a pre-entry analysis to give you the information you need to budget and make a decision whether and how to establish on a new market. "
          />
        </div>
      </section>
      <ImageText
        active="notactive"
        size="medium"
        title="Do you prefer that we get get back to you?"
        text="You can always get in touch with Internago with any type of question – just fill in this form and we will get back to you!"
        image={devices}
        alt="Different devices"
      />
      <Form />
      <Cta content="next" />
    </Layout>
  )
}

export default Contact
