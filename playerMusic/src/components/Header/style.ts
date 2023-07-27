import { styled } from "styled-components";

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.8rem;

  img {
    width: 25%;
    border-radius: 6px;
  }
`;

const Description = styled.div`
display: flex;
flex-direction: column;
gap: 0.9rem;
flex: 1

`;

export { Header, Description };
