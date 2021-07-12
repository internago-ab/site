import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Cta from "../components/cta"
import Grey from "../components/grey"
import ImageText from "../components/imagetext"
import Quotes from "../components/quotes"
import Tabs from "../components/tabs"

import ServicesExperienced from "../images/illustrations/services-experienced.png"
import ServicesDigitalize from "../images/illustrations/services-digitalize.png"
import ServicesOptimize from "../images/illustrations/services-optimize.png"

function Services() {
  return (
    <Layout>
      <Seo title="Services" />
      <Grey>
        <h1>Internago Services</h1>
        <p>
          Whether you just started your company, or if you are interested to
          streamline your existing operations – Internago is your trusted
          partner
          <br />
          <br />
          We provide hands-on support backed up by qualitative and quantitative
          analysis of relevant industry information that can support you in
          business critical decisions. We work close with our clients in a
          transparent and efficient manner where your success as our objective.
        </p>
      </Grey>
      <ImageText
        size="small"
        title="Digitalize"
        text="Edited Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        image={ServicesDigitalize}
      />
      <ImageText
        reverse="rowreverse"
        size="small"
        title="Optimize"
        text="Edited Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        image={ServicesOptimize}
      />
      <ImageText
        size="small"
        title="Digitalize"
        text="Edited Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        image={ServicesDigitalize}
      />

      <Grey>
        <h2>Advisory and Incorporation Services</h2>
        <p>
          Our experienced team of consultants have worked in various industries
          and with different challenges, and can take care of the time consuming
          and complex administrative tasks before, during and after you enter a
          new market. We have an extensive network and long experience of
          finding the best partners for our clients.
        </p>
        <Tabs />
      </Grey>
      <ImageText
        size="medium"
        title="Experienced Professionals"
        text="<p>Setting up a new company, whether it is in your home country, or if you are taking a step into an international market, is an important process where many important decisions must be made.</p>
        </br>
        <p>Internago collaborates with a team of legal and tax professionals in all countries where we operate. We make sure that you get the best advice on how to set up your new entity.</p>
        </br>
        <p>All steps regarding company form, ownership, management, board of directors and fiscal set-up will be discussed and agreed together with your team.</p>
        </br>
        <p>Internago will walk you through what you need to have in place to be operational and can support you in setting up bank accounts, accounting and payroll.</p>"
        image={ServicesExperienced}
        button="Contact our experts"
        link=""
      />
      <div className="quotes-wrapper">
        <Quotes
          size="right"
          text="<p>The implementation process went very smooth, and the fact that is was online made it easier and more transparent for us at the HQ to follow the progress, and we could update the necessary information for incorporation, bank and fiscal codes etc. in realtimee</p><br/>"
          author="<p>Rickard Lundström CFO
          </br>
          Rototilt Group AB</p>"
        />
        <Quotes
          size="middle"
          text="<p>Internago has handled our international operations very professionally, from setup to continuous management. </p>
          <br/>
          <p>Their service is professional yet personal, with a solid web portal for managing all documentation.</p><br/>"
          author="<p>Max Friberg Founder
          </br>
          Inex One</p>"
          company="Founder, Inex One"
        />
        <Quotes
          size="bottom"
          text="<p>I recommend Internago to companies that want to develop their business and grow into new markets.</p> <br/>"
          author="<p>Fabio Frozzi 
          </br>
          CEO, Co.Ma SPA
          </p>"
        />
      </div>
      <Cta content="next" />
    </Layout>
  )
}

export default Services
