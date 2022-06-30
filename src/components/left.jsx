import React from 'react';
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 50%;
  margin-right: 30px;
  animation: ${smoothAppear} 700ms ease-in;
`;

const Img = styled.img`
  margin-top: 30px;
  width: 450px;
`;

const Text = styled.div`
  color: grey;
`;

const Left = () => {
  return (
    <Wrapper>
      <Img src="/images/triple2x.png" />
      <Text>2021년 12월 기준</Text>
    </Wrapper>
  );
};

export default Left;
