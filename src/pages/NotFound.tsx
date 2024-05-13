import styled from "styled-components";
import { device } from "../theme/Device";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  min-height: 100vh;
  padding: ${({ theme }) => `${theme.spacings.xl}`};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.h2};
  color: ${({ theme }) => theme.colors.mainBlue};

  @media ${device.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export const NotFound = () => <Wrapper>Page Not Found</Wrapper>;
