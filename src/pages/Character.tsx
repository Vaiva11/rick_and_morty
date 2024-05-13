import styled from "styled-components";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import useFetchItem from "../utils/hooks/useFetchItem";
import { ButtonLink } from "../components/ButtonLink";
import { CharacterInfo } from "../components/CharacterInfo";
import { device } from "../theme/Device";
import { Context } from "../utils/context/Context";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  min-height: 100vh;
  padding: 0 ${({ theme }) => `${theme.spacings.xl}`};

  @media ${device.mobile} {
    padding: 0 ${({ theme }) => `${theme.spacings.md}`};
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  margin: ${({ theme }) => `${theme.spacings.xl}`} 0;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media ${device.mobile} {
    margin: ${({ theme }) => `${theme.spacings.md}`} 0;
  }
`;

export const Character = () => {
  const { id } = useParams();
  const { currentPage } = useContext(Context);
  const { items, loading } = useFetchItem(Number(id));

  return (
    <Wrapper>
      <ButtonLink
        to={`/home/${currentPage}`}
        text="Back Home"
        variant="light"
        pt={[4, 4]}
        pb={[2, 0]}
      />
      <InfoWrapper>
        {loading && <div>Loading...</div>}
        {!loading && items && <CharacterInfo item={items} id={Number(id)} />}
      </InfoWrapper>
    </Wrapper>
  );
};
