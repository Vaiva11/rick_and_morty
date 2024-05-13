import styled from "styled-components";
import { useParams } from "react-router-dom";
import useFetchItem from "../utils/hooks/useFetchItem";
import { ButtonLink } from "../components/ButtonLink";
import { CharacterInfo } from "../components/CharacterInfo";

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

export const Character = () => {
  const { id } = useParams();
  const fetchedItemData = useFetchItem(Number(id));

  const isIdFirst = () => Number(id) === 1;

  return (
    <Wrapper>
      <ButtonLink to="/home" text="Back Home" variant="light" p={2} />
      <InfoWrapper>
        {!isIdFirst() && (
          <ButtonLink to={`/character/${Number(id) - 1}`} text="<" m={2} />
        )}
        {fetchedItemData && <CharacterInfo item={fetchedItemData} />}
        <ButtonLink to={`/character/${Number(id) + 1}`} text=">" m={2} />
      </InfoWrapper>
    </Wrapper>
  );
};

// find if id is last
