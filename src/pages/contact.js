import React, { useEffect } from "react"
import "../components/contact.css"
import "../components/contact-flags.css"
//components
import Layout from "../components/layout"
import Seo from "../components/seo"
import Blue from "../components/blue-form"
import Cta from "../components/cta"
import ContactIcon from "../components/contact-icon"
import Grey from "../components/grey"
import Form from "../components/form"
import Accordion from "../components/accordion"
import AccordionCountries from "../components/accordionCountries"

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

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <Layout>
        <Seo
        title="Contact us"
        description="We are happy to hear from you, and our team is ready to assist you
        with any question you might have"
        lang="en"
        meta={[
          { name: "contact", content: "sales, support, request, markets" },
        ]}
      /> 
      <Blue>
        <h1>We are happy to hear from you</h1>
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

      <AccordionCountries
        title="Emails for our main markets:"
        contentMail={[
          {
            mail: "mailto:belgium@internago.com",
            adress: "belgium@internago.com",
            flag: belgium,
          },
          {
            mail: "mailto:finland@internago.com",
            adress: "finland@internago.com",
            flag: finland,
          },
          {
            mail: "mailto:france@internago.com",
            adress: "france@internago.com",
            flag: france,
          },
          {
            mail: "mailto:germany@internago.com",
            adress: "germany@internago.com",
            flag: germany,
          },
          {
            mail: "mailto:hungary@internago.com",
            adress: "hungary@internago.com",
            flag: hungary,
          },
          {
            mail: "mailto:italy@internago.com",
            adress: "italy@internago.com",
            flag: italy,
          },
          {
            mail: "mailto:netherlands@internago.com",
            adress: "netherlands@internago.com",
            flag: netherlands,
          },
          {
            mail: "mailto:portugal@internago.com",
            adress: "portugal@internago.com",
            flag: portugal,
          },
          {
            mail: "mailto:spain@internago.com",
            adress: "spain@internago.com",
            flag: spain,
          },
          {
            mail: "mailto:sweden@internago.com",
            adress: "sweden@internago.com",
            flag: sweden,
          },
          {
            mail: "mailto:switzerland@internago.com",
            adress: "switzerland@internago.com",
            flag: switzerland,
          },
          {
            mail: "mailto:uk@internago.com",
            adress: "uk@internago.com",
            flag: uk,
          },
        ]}
      />

      <section className="medium section-top bg-light-blue">
        <div className="header-text">
          <h2>Frequently Asked Questions</h2>
          <p className="">
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

      <div className="landing-wrapper contact">
        <div className="flex-left">
          <h2 className="heading">
            Do you prefer that we get get back to you?
          </h2>
          <p className="paragraph">
            You can always get in touch with Internago with any type of question
            – just fill in this form and we will get back to you!
          </p>
        </div>
        <Form />
      </div>

      <Cta content="next" noMargin={true} />
    </Layout>
  )
}

export default Contact
