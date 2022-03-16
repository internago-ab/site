import React, { useEffect } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Cta from "../components/cta"
import Blue from "../components/blue"
import GreyAnimation from "../components/grey-animation"
import ImageText from "../components/imagetext"
import Quotes from "../components/quotes"
import Tabs from "../components/tabs"

import ServicesOptimize from "../images/illustrations/services-optimize.png"
import landingPageFirst from "../images/illustrations/landingpage-first.png"
import processOrientedApproach from "../images/illustrations/services-process-oriented-approach.png"

import Aos from "aos"
import "aos/dist/aos.css"

function Services() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <Layout>
      <Seo title="Services" />
      <Blue>
        <h1>Internago Services</h1>
        <p>
          Our experienced team can handle complex payroll in an international
          setting
        </p>
      </Blue>

      <ImageText
        size="medium"
        title="International payroll services"
        text="Payroll can be complex on foreign markets. Local rules and regulations apply. You need to ensure that you have local employment contracts, and that you understand local taxes and social contributions.   
        We are specialized in working with payroll on international markets. We ensure that your company is fully compliant with local regulations. Our payroll portal enables you to have full control and overview of your payroll process and staff. "
        image={ServicesOptimize}
        alt="A woman walking on an arrow graph and a man sitting on a circle diagram working on a computer"
        button="Contact our experts"
        link="/contact#form"
      />
      <div className="bg-light-blue">
        <ImageText
          reverse="rowreverse"
          size="medium"
          title="Process oriented approach"
          text="Internago works with payroll using a process oriented approach. 
          We have over time developed our own process to optimize all the different steps in the payroll cycle for our customers.
          A key feature in our payroll process is to have one project manager, clearly defined steps in the payroll cycle along with a well established payroll calendar."
          image={processOrientedApproach}
          alt="A person walking up a graph with another person holding the graph"
          active="notactive"
        />
      </div>
      <ImageText
        size="medium"
        title="Technical integrations"
        text="We are convinced that technology adds considerable value to the payroll process. 
          Technical integrations with our customers' systems will result in saving time while increasing quality. 
          We strive to minimize manual processing and find ways for technology to replace repetitive and time consuming tasks in the payroll cycle.
          When we kick off a project, we always make an assessment of the customers' current systems to find out where we could find integration possibilities."
        image={landingPageFirst}
        alt="A woman walking on an arrow graph and a man sitting on a circle diagram working on a computer"
        active="notactive"
      />
      <div className="bg-light-blue">
        <ImageText
          reverse="rowreverse"
          size="medium"
          title="Quality focus"
          text="Every payroll project is different and must be given full attention. 
          International payroll is often complex and needs to be thoroughly analysed and prepared by our experts. 
          At Internago we focus on quality, not quantity. 
          We enjoy complex payroll assignments, and we make sure that we always deliver quality for our customers regardless of the size of the headcount."
          image={landingPageFirst}
          alt="A woman walking on an arrow graph and a man sitting on a circle diagram working on a computer"
          active="notactive"
        />
      </div>
      <GreyAnimation className="margin-top-none">
        <h2>Local experts</h2>
        <div className="grey-middle">
          <p>
            Our experienced team has worked in various industries and with a
            wide range of challenges.
            <br />
            We can take care of the complex and time-consuming administrative
            tasks before, during and after you enter a new market.
          </p>
        </div>
        <Tabs />
      </GreyAnimation>

      <div className="quotes-wrapper">
        <Quotes
          size="right"
          text="The implementation process went very smooth, and the fact that is was online made it easier and more transparent for us at the HQ to follow the progress, and we could update the necessary information for incorporation, bank and fiscal codes etc. in realtimee<br/><br/>"
          author="Rickard Lundström
          </br>
          CFO, Rototilt Group AB"
        />
        <Quotes
          size="middle"
          text="Internago has handled our international operations very professionally, from setup to continuous management. 
          <br/><br/>
          Their service is professional yet personal, with a solid web portal for managing all documentation.<br/><br/>"
          author="Max Friberg
          </br>
          Founder, Inex One"
        />
        <Quotes
          size="bottom"
          text="I recommend Internago to companies that want to develop their business and grow into new markets. <br/><br/>"
          author="Fabio Frozzi 
          </br>
          CEO, Co.Ma SPA
          "
        />
      </div>
      <Cta content="next" />
    </Layout>
  )
}

export default Services
