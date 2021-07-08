import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Grey from "../components/grey"
import Cta from "../components/cta"

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
