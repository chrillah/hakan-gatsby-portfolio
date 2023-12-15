import * as React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { INLINES, BLOCKS, MARKS } from ""

import Layout from "../components/layout"

//sidans namn blir portfolio efter namnet på javascript-filen
const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolioItem {
        edges {
          node {
            portfolioTitle
            portfolioHeroImage {
              gatsbyImage(width: 1000)
            }
            portfolioDescription {
              portfolioDescription
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <ul>
        {data.allContentfulPortfolioItem.edges.map(edge => {
          return (
            <li key={edge.node.portfolioTitle}>
              <h2>{edge.node.portfolioTitle}</h2>
              <GatsbyImage
                image={getImage(edge.node.portfolioHeroImage)}
                alt={edge.node.portfolioTitle}
              />
              <p>{edge.node.portfolioDescription.portfolioDescription}</p>
            </li>
          )
        })}
      </ul>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const Head = () => <title>Portfolio Page</title>

export default SecondPage
