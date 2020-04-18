import React, { Fragment } from 'react';
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Hero, Heading, Section, Container } from "react-bulma-components";
import 'app.scss';

const App = () => {
  return (<Fragment>
    <div>
      <Section>
        <Hero color="info" >
          <Hero.Body>
            <Container>
              <Heading>SpotCODE</Heading>
              <Heading subtitle size={3}> React </Heading>
            </Container>
          </Hero.Body>
        </Hero>
      </Section>
    </div>
  </Fragment>);
};

export default App;