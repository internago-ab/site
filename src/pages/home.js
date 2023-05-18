import * as React from "react"

import "../components/home.css"
import "../components/imagetextover.css"

//Components
import Layout from "../components/layout"
import Seo from "../components/seo"
import ImageText from "../components/home_imagetext"
import Bookdemo from "../components/bookdemo"
import Icongrid from "../components/iconcol"
import Cta from "../components/cta"

//Images
import Phones from "../images/mockups/payroll-three-phones.png"
import PhoneTablet from "../images/mockups/payroll-desktop-tablet.png"
import Services from "../images/photos/services.jpg"
import arrow from "../images/icons/link-arrow.svg"
import happyUser from '../images/photos/happyUser.jpg'

//Logos
import kitabsawti from "../images/clients/kitab-sawti.png"
import benify from "../images/clients/benify.svg"
import dedicare from "../images/clients/dedicare.svg"
import rototilt from "../images/clients/rototilt.svg"
import enmacc from "../images/clients/enmacc.svg"
import sportamore from "../images/clients/sportamore.svg"
import teamtailor from "../images/clients/teamtailor.png"
import inexone from "../images/clients/inexone.svg"
import globalcitizen from "../images/clients/globalCitizen.png"
import icmstellarcolorlogo from "../images/clients/ICMStellarColorLogo.png"
import logoclimatepartner from "../images/clients/LogoClimatePartner.jpeg"

import automate from "../images/icons/automate.svg"
import simplify from "../images/icons/simplify.svg"
import compliance from "../images/icons/compliance.svg"
//animation
import Marquee from "react-fast-marquee"

const Home = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <div className="landing">
        <div className="landing-wrapper">
          <div className="flex-left">
            <h1 className="heading">
              Remove the hassle<br></br> of international <br></br> payroll.
            </h1>
            <p className="paragraph">
              Eliminate stress and save precious time – use Internago to
              streamline the payroll process, no matter where your team members
              are.
            </p>
          </div>
          <Bookdemo />
        </div>
      </div>
      <div className="">
        <div className="container-logo demo-flex">
          <h2>Trusted by teams and partners</h2>
          <Marquee loop={0}>
            <div className="clients-slider">
              <div className="image_wrapper">
                <img src={kitabsawti} alt="Kitab Sawti logo" />
              </div>
              <div className="image_wrapper">
                <img src={benify} alt="Benify logo" />
              </div>
              <div className="image_wrapper">
                <img src={dedicare} alt="Dedicare logo" />
              </div>
              <div className="image_wrapper">
                <img src={rototilt} alt="Rototilt logo" />
              </div>
              <div className="image_wrapper">
                <img src={enmacc} alt="Enmacc logo" />
              </div>
              <div className="image_wrapper">
                <img src={sportamore} alt="Sportamore logo" />
              </div>
              <div className="image_wrapper">
                <img src={teamtailor} alt="Kitab Sawti logo" />
              </div>
              <div className="image_wrapper">
                <img src={inexone} alt="Benify logo" />
              </div>
              <div className="image_wrapper">
                <img src={globalcitizen} alt="Dedicare logo" />
              </div>
              <div className="image_wrapper">
                <img src={icmstellarcolorlogo} alt="Rototilt logo" />
              </div>
              <div className="image_wrapper">
                <img src={logoclimatepartner} alt="Enmacc logo" />
              </div>
            </div>
          </Marquee>
        </div>
      </div>
      <ImageText
        //   reverse="rowreverse"
        size="large"
        title="The challange"
        text="<strong>If you’re managing an international team, you already know how challenging handling payroll for employees in multiple countries can be.</strong> <br><br>From navigating complex tax regulations and compliance requirements to managing different currencies and payment methods, international payroll can be a major headache for businesses of all sizes."
        image={Phones}
        alt="Internagos dashborard on a computerscreen"
        button="See all powerful features"
        link="/payroll"
      />
      <ImageText
        reverse="rowreverse"
        size="large"
        title="Our solution"
        text="<strong>That’s where our international payroll portal and consultancy services come in.</strong><br></br>We’ve developed a comprehensive solution that streamlines the payroll process regardless of your team members location. Our software is designed to integrate seamlessly with your existing systems, making it easy to manage payroll and stay on top of compliance requirements."
        image={PhoneTablet}
        alt="Internagos dashborard on a computerscreen"
        button="See all powerful features"
        link="/payroll"
      />
      <Icongrid
        content={[
          {
            icon: compliance,
            alt: "Ensure compliance:",
            header: "Online payroll",
            text:
              "We stay up-to-date with the latest regulations in every country where your employees are located, so you can rest assured that your payroll is always compliant.",
            button: "Read more",
            link: "/services",
          },
          {
            icon: automate,
            alt: "Wifi icon",
            header: "Automate the payroll process:",
            text:
              "Our software automates key tasks, saving you time and reducing the risk of errors.",
            button: "Read more",
            link: "/services",
          },
          {
            icon: simplify,
            alt: "Calendar icon",
            header: "Simplify reporting:",
            text:
              "Generate comprehensive reports that clearly show your payroll across all countries and currencies.",
            button: "Read more",
            link: "/services",
          },
        ]}
      />
      <section>
        <div className="section">
          <div className="bg-text-image">
            <div className="text-container">
              <h2>We don’t just offer GDPR compliant software –</h2>
              <p className=" text-bold">
                We also provide expert consultancy services to help you navigate
                the complexities of international payroll.{" "}
              </p>
              <p>
                Our team of experienced professionals can guide everything from
                tax and compliance issues to local labor laws and cultural
                considerations.
              </p>
              <div className="link-arrow-black">
                <a href="/home#formDemo">
                  Book a demo
                  <img alt="arrow icon" src={arrow} />
                </a>
              </div>
            </div>
            <div className="image-container">
              <img src={Services} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="cta cta-home" style={{ backgroundImage: `url(${happyUser})` }}>
        <div className="content">
          <h2>
            Don’t let international payroll be a headache for your business.{" "}
          </h2>
          <p>
            Contact us today to learn how our software and consultancy services
            can simplify the process and save you time and money.
          </p>
          <div className="cta-btn">
            <a href="/contact#form">Contact us today</a>
          </div>
        </div>
      </section>
      {/* <Cta content="next" /> */}
    </Layout>
  )
}

export default Home
