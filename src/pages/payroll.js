import React from 'react';

import Layout from "../components/layout"
import Seo from "../components/seo"
import Cta from "../components/cta"

function Payroll() {

    return (
        <Layout>
            <Seo title="Payroll" />
            <Cta content="next"/>
        </Layout>
    );
}

export default Payroll;