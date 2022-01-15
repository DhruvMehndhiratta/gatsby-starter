import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import Img from "gatsby-image"

const Projects = ({ data }) => {
  const projects = data.projects.nodes
  const contact = data.contacts.siteMetadata.contact
  console.log(projects, "projecbt")
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={styles.projects}>
          {projects.map(item => {
            return (
              <Link to={`/projects/${item.frontmatter.slug}`} key={item.id}>
                <Img fluid={item.frontmatter.thumb.childImageSharp.fluid} />
                <h3>{item.frontmatter.title}</h3>
                <p>{item.frontmatter.stack}</p>
              </Link>
            )
          })}
        </div>
        <p>Like what you see email me at {contact} for a quote</p>
      </div>
    </Layout>
  )
}

export default Projects

//multiple query using alias
// GatsbyImageSharpFluid will grab all the prop which exist in fluid response like src etc.

export const query = graphql`
  query projectsPage {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contacts: site {
      siteMetadata {
        contact
      }
    }
  }
`
