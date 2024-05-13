import styled from "styled-components";

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.lightGray};
  padding: ${({ theme }) => `${theme.spacings.xl}`};
`;

export const Home = () => {
  return <Wrapper>Home</Wrapper>;
};
