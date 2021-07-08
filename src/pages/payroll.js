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
      <Cta content="next" />
    </Layout>
  )
}

export default Payroll
