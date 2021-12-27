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
      <GreyAnimation>
        <h2>Local support</h2>
        <div className="grey-middle">
          <p>
            Our experienced team has worked in various industries and with a
            wide range of challenges.
            <br />
            We can take care of the time consuming and complex administrative
            tasks before, during and after you enter a new market.
          </p>
        </div>
        <Tabs />
      </GreyAnimation>

      <div className="quotes-wrapper">
        <Quotes
          size="right"
          text="The implementation process went very smooth, and the fact that is was online made it easier and more transparent for us at the HQ to follow the progress, and we could update the necessary information for incorporation, bank and fiscal codes etc. in realtimee<br/><br/>"
          author="Rickard Lundström CFO
          </br>
          Rototilt Group AB"
        />
        <Quotes
          size="middle"
          text="Internago has handled our international operations very professionally, from setup to continuous management. 
          <br/><br/>
          Their service is professional yet personal, with a solid web portal for managing all documentation.<br/><br/>"
          author="Max Friberg Founder
          </br>
          Inex One"
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
