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

const Texts = styled.div`
  margin-left: 30px;
  margin-bottom: 40px;
  animation: ${smoothAppear} 700ms ease-in;
`;

const Text = styled.div`
  font-size: 40px;
`;

const RightTop = () => {
  return (
    <Texts>
      <Text> 700만 명의 여행자</Text>
      <Text> 100만 개의 여행 리뷰</Text>
      <Text>470만 개의 여행 일정</Text>
    </Texts>
  );
};

export default RightTop;
