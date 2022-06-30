import { useEffect, useState } from 'react';
import RightBottom from './right-bottom';
import RightTop from './right-top';
import styled, { keyframes } from 'styled-components';

const smoothAppear = keyframes`
0% {
  opacity: 0;
  transform: translateY(10%)
}
10% {
  opacity: 0.1;
  transform: translateY(9%)
}
20% {
  opacity: 0.2;
  transform: translateY(8%)
}
30% {
  opacity: 0.3;
  transform: translateY(7%)
}
40% {
  opacity: 0.4;
  transform: translateY(6%)
}
50% {
  opacity: 0.5;
  transform: translateY(5%)
}
60% {
  opacity: 0.6;
  transform: translateY(4%)
}
70% {
  opacity: 0.7;
  transform: translateY(3%)
}
80% {
  opacity: 0.8;
  transform: translateY(2%)
}
90% {
  opacity: 0.9;
  transform: translateY(1%)
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
  margin-left: 70px;
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
