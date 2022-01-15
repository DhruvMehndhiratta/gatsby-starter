import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import * as styles from "../styles/project-detail.module.css"

const ProjectDetails = ({ data }) => {
  console.log(data, "data");
  const { html } = data.markdownRemark;
  const { featuredImg, title, stack  } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <Img fluid={featuredImg.childImageSharp.fluid}/>
          </div>
        <div className={styles.html} dangerouslySetInnerHTML={{__html: html}}/>
      </div>
    </Layout>
  )
}

export default ProjectDetails

export const query = graphql`
  query fetchProjectDetail($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        stack
        title
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`
