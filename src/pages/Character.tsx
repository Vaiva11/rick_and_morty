import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import useFetchItem from "../utils/hooks/useFetchItem";
import { ButtonLink } from "../components/ButtonLink";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  min-height: 100vh;
`;

const InfoWrapper = styled.div`
  display: flex;
  margin: ${({ theme }) => `${theme.spacings.xl}`} 0;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => `${theme.spacings.xl}`};
  box-shadow: 0px 0px 30px 0px ${({ theme }) => theme.colors.mainBlue};
  border-radius: ${({ theme }) => `${theme.spacings.sm}`};
  background-color: ${({ theme }) => theme.colors.white};
  max-width: 300px;
`;

export const Character = () => {
  const { id } = useParams();
  const fetchedItemData = useFetchItem(Number(id));

  const isIdFirst = () => Number(id) === 1;

  return (
    <Wrapper>
      <ButtonLink to="/home" text="Back" variant="light" />
      <InfoWrapper>
        {!isIdFirst() && (
          <ButtonLink to={`/character/${Number(id) - 1}`} text="<" />
        )}
        {fetchedItemData && (
          <Info>
            <img src={fetchedItemData.image} alt={fetchedItemData.name} />
            <div>Name: {fetchedItemData.name}</div>
            <div>Status: {fetchedItemData.status}</div>
            <div>Species: {fetchedItemData.species}</div>
            <div>Gender: {fetchedItemData.gender}</div>
            <div>Origin: {fetchedItemData.origin.name}</div>
            <div>Last known location: {fetchedItemData.location.name}</div>
            <div>
              Number of episodes appearance: {fetchedItemData.episode.length}
            </div>
          </Info>
        )}
        <ButtonLink to={`/character/${Number(id) + 1}`} text=">" />
      </InfoWrapper>
    </Wrapper>
  );
};

// find if id is last
