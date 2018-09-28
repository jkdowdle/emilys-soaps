import React from 'react'
import { Link } from 'gatsby'
import { Section, Container, Content, Title } from 'bloomer'

import Layout from '../components/layout'
import OrderForm from '../components/order-form'
import HappyBirthday from '../components/happy-birthday'

const IndexPage = () => (
  <Layout>
    <Section>
      <Container>
        <Title isSize={3}>Order amazing soaps</Title>
        <OrderForm />
      </Container>
    </Section>
    <HappyBirthday />
    <Section>
      <Container>
        <Content>
          <Title isSize={3}>Learn about Emily!</Title>
          <p>
            Emily is an amazing woman who loves to share her soap making hobbies
            with others! Weather it is spices in the fall, or flowers in the spring, Emily draws a lot of inspiration from the seasons and
            holidays. You could call her a lover of seasons.
          </p>

          <p>
            Outside of soap making, Emily enjoys being an amazing aunt,
            spending time with all of her family or her little dog.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus soluta sequi laborum aliquid dicta laudantium obcaecati
            ratione sit nostrum vitae quo autem, aperiam atque qui quia
            exercitationem aspernatur consequatur deserunt. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Ad, corporis, quas vel
            inventore totam reiciendis commodi velit dolor odit dolorem veniam
            asperiores laboriosam enim harum numquam ab praesentium incidunt
            aut?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus soluta sequi laborum aliquid dicta laudantium obcaecati
            ratione sit nostrum vitae quo autem, aperiam atque qui quia
            exercitationem aspernatur consequatur deserunt.
          </p>
        </Content>
      </Container>
    </Section>
  </Layout>
)

export default IndexPage
