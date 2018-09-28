import React from 'react'
import { Hero, HeroBody, Container, Subtitle, Title } from 'bloomer'
// import { Link } from 'gatsby'

import './header.css'

const Header = () => (
  <Hero isColor="info" isFullHeight>
    <HeroBody>
      <Container hasTextAlign="centered">
        <Subtitle isSize={1} tag="h1" style={{ color: '#fff' }}>
          <i>Emily's Fantastic Soaps</i>
        </Subtitle>
        <Title isSize={5} tag="h2">Coming Soon</Title>
      </Container>
    </HeroBody>
  </Hero>
)

export default Header

// const Header = () => (
//   <div
//     style={{
//       background: 'rebeccapurple',
//       marginBottom: '1.45rem',
//     }}
//   >
//     <div
//       style={{
//         margin: '0 auto',
//         maxWidth: 960,
//         padding: '1.45rem 1.0875rem',
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: 'white',
//             textDecoration: 'none',
//           }}
//         >
//           Emily's Fantastic Soaps!
//         </Link>
//       </h1>
//     </div>
//   </div>
// )
