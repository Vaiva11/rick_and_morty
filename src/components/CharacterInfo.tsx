import { useContext } from "react";
import styled from "styled-components";
import { Character } from "../utils/types";
import { device } from "../theme/Device";
import { ButtonLink } from "../components/ButtonLink";
import { Context } from "../utils/context/Context";

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => `${theme.spacings.xl}`};
  box-shadow: 0px 0px 30px 0px ${({ theme }) => theme.colors.mainBlue};
  border-radius: ${({ theme }) => `${theme.spacings.sm}`};
  background-color: ${({ theme }) => theme.colors.white};
  max-width: 300px;

  img {
    margin-bottom: ${({ theme }) => `${theme.spacings.md}`};
    border-radius: ${({ theme }) => `${theme.spacings.sm}`};
    max-width: 100%;
  }

  @media ${device.mobile} {
    max-width: 100%;
    width: 100%;
    padding: ${({ theme }) => `${theme.spacings.md}`};
    margin-bottom: ${({ theme }) => `${theme.spacings.md}`};
  }
`;

const ButtonsWrapper = styled.div<{ isIdFirst: boolean }>`
  display: flex;
  margin-top: ${({ theme }) => `${theme.spacings.md}`};
  justify-content: ${({ isIdFirst }) =>
    isIdFirst ? "flex-end" : "space-between"};
`;

type CharacterInfoProps = {
  item: Character;
  id: number;
};

export const CharacterInfo = ({ item, id }: CharacterInfoProps) => {
  const { characterCount } = useContext(Context);

  const isIdFirst = () => id === 1;
  const isIdLast = () => id === characterCount;

  return (
    <Info>
      <img src={item.image} alt={item.name} />
      <div>
        <b>Name:</b> {item.name}
      </div>
      <div>
        <b>Status:</b> {item.status}
      </div>
      <div>
        <b>Species:</b> {item.species}
      </div>
      <div>
        <b>Gender:</b> {item.gender}
      </div>
      <div>
        <b>Origin:</b> {item.origin.name}
      </div>
      <div>
        <b>Last known location:</b> {item.location.name}
      </div>
      <div>
        <b>Number of episodes appearance:</b> {item.episode.length}
      </div>
      <ButtonsWrapper isIdFirst={isIdFirst()}>
        {!isIdFirst() && (
          <ButtonLink to={`/character/${Number(id) - 1}`} text="<" />
        )}
        {!isIdLast() && (
          <ButtonLink to={`/character/${Number(id) + 1}`} text=">" />
        )}
      </ButtonsWrapper>
    </Info>
  );
};
