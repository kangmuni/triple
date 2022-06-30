import React from 'react';
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
