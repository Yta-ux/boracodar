import { styled } from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 1fr 1fr;

  justify-content: center;
  align-content: center;
  gap: 3.1rem;

  & > div:nth-child(1) {
    grid-column: 1/2;
    grid-row: 1/3;

    header {
      flex-direction: column;
    }

    header > img {
      width: 80%;
    }
  }

  & > div:nth-child(2) {
    grid-column: 2/3;
    grid-row: 1/2;
  }

  & > div:nth-child(3) {
    grid-column: 2/3;
    grid-row: 2/3;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export { Container, Box}