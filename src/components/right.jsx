import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 50%;
  margin-bottom: 70px;
  margin-left: 30px;
  padding: 50px;
`;

const Texts = styled.div`
  margin-left: 30px;
  margin-bottom: 40px;
`;

const Text = styled.div`
  font-size: 40px;
`;

const Points = styled.div`
  display: flex;
  width: 500px;
  margin-left: 10px;
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

const Right = () => {
  return (
    <Wrapper>
      <Texts>
        <Text> 700만 명의 여행자</Text>
        <Text> 100만 개의 여행 리뷰</Text>
        <Text>470만 개의 여행 일정</Text>
      </Texts>
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
    </Wrapper>
  );
};

export default Right;
