import styled from "styled-components";
import { Character } from "../utils/types";

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => `${theme.spacings.xl}`};
  box-shadow: 0px 0px 30px 0px ${({ theme }) => theme.colors.mainBlue};
  border-radius: ${({ theme }) => `${theme.spacings.sm}`};
  background-color: ${({ theme }) => theme.colors.white};
  max-width: 300px;
`;

type CharacterInfoProps = {
  item: Character;
};

export const CharacterInfo = ({ item }: CharacterInfoProps) => (
  <Info>
    <img src={item.image} alt={item.name} />
    <div>Name: {item.name}</div>
    <div>Status: {item.status}</div>
    <div>Species: {item.species}</div>
    <div>Gender: {item.gender}</div>
    <div>Origin: {item.origin.name}</div>
    <div>Last known location: {item.location.name}</div>
    <div>Number of episodes appearance: {item.episode.length}</div>
  </Info>
);
