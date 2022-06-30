import { useEffect, useState } from 'react';
import RightBottom from './right-bottom';
import RightTop from './right-top';
import styled, { keyframes } from 'styled-components';

const smoothAppear = keyframes`
0% {
  opacity: 0;
  transform: translateY(10%)
}
100% {
  opacity: 1;
  transform: translateY(0);
}
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1 1 50%;
  margin-bottom: 70px;
  margin-left: 30px;
  padding: 50px;
  animation: ${smoothAppear} 700ms ease-in;
`;

const Right = () => {
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
      {isRunning1 && <RightTop></RightTop>}
      {isRunning2 && <RightBottom></RightBottom>}
    </Section>
  );
};

export default Right;
