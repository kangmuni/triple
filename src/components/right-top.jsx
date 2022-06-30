import { useEffect, useState } from 'react';
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

const Texts = styled.div`
  margin-left: 30px;
  margin-bottom: 40px;
  animation: ${smoothAppear} 700ms ease-in;
`;

const Text = styled.div`
  font-size: 40px;
  margin-top: 15px;
`;

const RightTop = () => {
  const [traveler, setTraveler] = useState(0);
  const [review, setReview] = useState(100);
  const [schedule, setSchedule] = useState(470);

  const counter = (max) => {
    let now = max;

    const handle = setInterval(() => {
      setTraveler(Math.ceil(max - now));
      if (now < 0) {
        clearInterval(handle);
      }
      const step = now / 10;
      setTraveler((now -= step / 10));
    }, 50);
  };

  useEffect(() => {
    const max = 700;
    setTimeout(() => counter(max), 2000);
  });

  return (
    <Texts>
      <Text> {traveler}만 명의 여행자</Text>
      <Text> {review}만 개의 여행 리뷰</Text>
      <Text>{schedule}만 개의 여행 일정</Text>
    </Texts>
  );
};

export default RightTop;
