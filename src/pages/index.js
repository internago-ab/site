import * as React from "react"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Index = () => {

  return (
    <Layout>
      <Seo title="Home" />
      <Bio />
    </Layout>
  )
}

export default Index

