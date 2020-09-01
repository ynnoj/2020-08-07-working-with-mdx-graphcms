import React from 'react'
import { MDXProvider } from '@mdx-js/react'

const wrapRootElement = ({ element }) => {
  return (
    <MDXProvider
      components={{
        h2: (props) => <h2 style={{ color: 'blue' }} {...props} />,
        p: (props) => <p style={{ color: 'red' }} {...props} />,
        CTA: (props) => (
          <div style={{ color: 'red' }}>
            {props.sales
              ? 'Please contact us for pricing'
              : 'Pricing is $255 per month'}
          </div>
        ),
        Test: () => (
          <div style={{ backgroundColor: 'black', color: 'white' }}>
            This is from MDX
          </div>
        ),
      }}
    >
      {element}
    </MDXProvider>
  )
}

export { wrapRootElement }
