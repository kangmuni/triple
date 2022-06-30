import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Left from './left';
import Right from './right';

const Section = styled.section`
  display: flex;
  align-items: center;
  min-width: 1200px;
  height: 650px;
`;

const Page = () => {
  const [isRunning1, setIsRunning1] = useState(false);
  const [isRunning2, setIsRunning2] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRunning1(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [isRunning1]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRunning2(true);
    }, 200);
    return () => clearTimeout(timer);
  }, [isRunning2]);

  return (
    <Section>
      {isRunning1 && <Left></Left>}
      {isRunning2 && <Right></Right>}
    </Section>
  );
};

export default Page;
