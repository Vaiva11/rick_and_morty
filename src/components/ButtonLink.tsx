import styled from "styled-components";
import { Link } from "react-router-dom";
import { space, SpaceProps } from "styled-system";

type WrapperProps = SpaceProps & {
  variant: string;
};

const StyledLink = styled(Link)<WrapperProps>`
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  border-radius: ${({ theme }) => theme.spacings.xs};
  font-weight: bold;
  width: fit-content;
  height: fit-content;
  display: block;
  cursor: pointer;

  ${({ variant, theme }) => {
    if (variant === "dark")
      return `
        background: ${theme.colors.mainBlue};
        color: ${theme.colors.white};
        `;
    if (variant === "light")
      return `
        background: transparent;
        color: ${theme.colors.mainBlue};
        `;
  }}
  &:hover {
    opacity: 0.7;
    transition: 0.2s;
  }
  ${space}
`;

const Wrapper = styled.div<SpaceProps>`
  padding: ${({ theme }) => `${theme.spacings.sm} ${theme.spacings.md}`};
  border-radius: ${({ theme }) => theme.spacings.xs};
  border: 1px solid ${({ theme }) => theme.colors.mainBlue};
`;

type ButtonLinkType = SpaceProps & {
  variant?: "light" | "dark";
  text: string;
  to: string;
};

export const ButtonLink = ({
  variant = "dark",
  text,
  to,
  ...props
}: ButtonLinkType) => (
  <StyledLink to={to} variant={variant} {...props}>
    <Wrapper>{text}</Wrapper>
  </StyledLink>
);
