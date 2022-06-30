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
