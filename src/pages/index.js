import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
  <div>
    <h2>Welcome, scrubs</h2>
    <p>There are {data.allMarkdownRemark.totalCount} posts.</p>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Link to={node.fields.slug}>
          <h3>{node.frontmatter.title}</h3>
          <h4>{node.frontmatter.date}</h4>
          <p>{node.excerpt}</p>
        </Link>
      </div>
    ))}
  </div>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
