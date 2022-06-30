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

const Points = styled.div`
  display: flex;
  width: 500px;
  margin-left: 10px;
  animation: ${smoothAppear} 700ms ease-in;
`;

const Point = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
`;

const Description = styled.div`
  padding-left: 10px;
  color: rgb(107, 106, 106);
  font-size: 16px;
  font-weight: bold;
`;

const Img = styled.img`
  width: 60px;
`;

const RightBottom = () => {
  return (
    <Points>
      <Point>
        <Img src="/images/play-store2x.png"></Img>
        <Description>
          2018 구글 플레이스토어 <br />
          올해의 앱 최우수상 수상
        </Description>
      </Point>
      <Point>
        <Img src="/images/badge-apple4x.png"></Img>
        <Description>
          2018 애플 앱스토어
          <br />
          올해의 여행앱 선정
        </Description>
      </Point>
    </Points>
  );
};

export default RightBottom;
