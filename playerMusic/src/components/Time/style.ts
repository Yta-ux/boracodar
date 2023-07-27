import { styled } from "styled-components";

const Time = styled.div`
width: 100%`;

const BarTime = styled.div`
  background-color: rgba(217, 217, 217, 0.3);
  position: relative;
  height: 0.5rem;
  border-radius: 6px;
  width: 100%;
  z-index: 2;
  ::before {
    content: "";
    background-color: #D9D9D9;
    border-radius: 6px;
    height: 0.5rem;
    width: 90%;
    position: absolute;
  }
`;

const TimeMusic = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: .9rem;

  p {
    font-size: 1.3rem;
  }
`;

export { Time, BarTime, TimeMusic };
