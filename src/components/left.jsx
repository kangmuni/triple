import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 50%;
  margin-right: 30px;
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
      <Img src="/images/triple2x.png"></Img>
      <Text>2021년 12월 기준</Text>
    </Wrapper>
  );
};

export default Left;
