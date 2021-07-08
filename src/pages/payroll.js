import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Grey from "../components/grey"
import Cta from "../components/cta"
import ImageText from "../components/imagetext"

import PayrollShareDoc from "../images/illustrations/payroll-sharedoc.png"

function Payroll() {
  return (
    <Layout>
      <Seo title="Payroll" />
      <Grey>
        <h1>Internago Payroll Portal</h1>
        <p>
          With Internago’s payroll portal you can cut costs and increase
          efficiency, while still having maximum control over your international
          payroll.
          <br />
          <br />
          Our international payroll software enables you to manage your payroll
          and HR in multiple subsidiaries and in one place – online.
        </p>
      </Grey>
      <ImageText
        size="medium"
        title="ShareDoc -Document management tool"
        text="Our payroll software also lets you share and exchange payroll related files in a secure and GDPR compliant manner. ShareDoc is designed to improve your document workflow, and makes it easy and secure to exchange, control, authorize and approve documents online.

        Features
        — Share hyperlinks to authorised external and internal stakeholders
        — Control, authorize, approve and reject documents online
        — GDPR conformity
        — E-mail notification to authorised users
        — Add users and control access based on need-to-know basis"
        image={PayrollShareDoc}
        button="Try it today"
        link=""
      />
      <Grey>
        <h2>Payroll and HR Management</h2>
        <p>
          Payroll can be complex in an international context. Local rules and
          regulations, different employment contracts, taxes and severence pay
          are just some things that you need to get in place and that influence
          the cost of personnell. We collaborate with the best local experts
          ensuring full compliance with local regulation.
        </p>
      </Grey>
      <Cta content="next" />
    </Layout>
  )
}

export default Payroll
