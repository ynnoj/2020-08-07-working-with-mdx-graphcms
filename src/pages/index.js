import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

function IndexPage({ data }) {
  const { posts } = data

  return posts.nodes.map((post) => (
    <div key={post.id}>
      <h1>{post.title}</h1>
      <MDXRenderer>{post.content.markdownNode.childMdx.body}</MDXRenderer>
    </div>
  ))
}

export const pageQuery = graphql`
  {
    posts: allGraphCmsPost {
      nodes {
        id
        title
        content {
          markdownNode {
            childMdx {
              body
            }
          }
        }
      }
    }
  }
`

export default IndexPage
