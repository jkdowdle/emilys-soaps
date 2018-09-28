import React from 'react'
import { Hero, HeroBody, Container, Title, Subtitle } from 'bloomer'

const HappyBirthday = () => (
  <Hero isColor="primary" isHalfHeight style={{ backgroundColor: '#9e72ed' }}>
    <HeroBody>
      <Container hasTextAlign="centered">
        <Title isSize={1}>Happy Birthday Emily!</Title>
        <Subtitle isSize={3} tag="h1">
          <i>Love Haley & Josh</i>
        </Subtitle>
      </Container>
    </HeroBody>
  </Hero>
)

export default HappyBirthday
