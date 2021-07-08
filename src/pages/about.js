import React from 'react';

import Layout from "../components/layout"
import Seo from "../components/seo"
import Cta from "../components/cta"

function About() {

    return (
        <Layout>
            <Seo title="About" />
            <Cta content="next"/>
        </Layout>
    );
}

export default About;