import React from 'react';
import styled from 'styled-components';
import Left from './left';
import Right from './right';

const Section = styled.section`
  display: flex;
  align-items: center;
  min-width: 1200px;
  height: 650px;
`;

const Page = () => (
  <Section>
    <Left></Left>
    <Right></Right>
  </Section>
);

export default Page;
