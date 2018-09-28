import React from 'react'
import PropTypes from 'prop-types'
import { SocialIcon } from 'react-social-icons'
import { Footer, Container, Content, Columns, Column } from 'bloomer'
import 'bulma/css/bulma.css'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer id="footer">
      <Container>
        <Content>
          <Columns style={{ alignItems: 'center' }}>
            <Column isSize="1/2">
              <p>Made with Love</p>
            </Column>
            <Column isSize="1/2">
              <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <SocialIcon url="https://www.facebook.com/" />
                <SocialIcon url="https://www.instagram.com/" />
                <SocialIcon url="https://pinterest.com/" />
                <SocialIcon url="https://www.yelp.com/" />
                <SocialIcon url="https://snapchat.com/" />
              </div>
            </Column>
          </Columns>
        </Content>
      </Container>
    </Footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Helmet
//           title={data.site.siteMetadata.title}
//           meta={[
//             { name: 'description', content: 'Sample' },
//             { name: 'keywords', content: 'sample, something' },
//           ]}
//         >
//           <html lang="en" />
//         </Helmet>
//         <Header siteTitle={data.site.siteMetadata.title} />
//         <div
//           style={{
//             margin: '0 auto',
//             maxWidth: 960,
//             padding: '0px 1.0875rem 1.45rem',
//             paddingTop: 0,
//           }}
//         >
//           {children}
//         </div>
//       </>
//     )}
//   />
// )
