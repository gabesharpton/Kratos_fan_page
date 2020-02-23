import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Image2 from "../components/image2"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <p>Welcome to Kratos Fan Site.</p>
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, borderRadius:`2px`, border: `1px solid black` }}>
      <Image />
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, borderRadius:`2px`, border: `1px solid black` }}><Image2/></div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
