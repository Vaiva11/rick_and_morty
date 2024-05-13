import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ResponseType } from "../utils/types";

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.colors.mainBlue};
  border-radius: ${({ theme }) => `${theme.spacings.sm}`};
  padding: ${({ theme }) => `${theme.spacings.md}`};
  margin: ${({ theme }) => `${theme.spacings.md}`};
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  img {
    max-width: 200px;
    border-radius: ${({ theme }) => `${theme.spacings.sm}`};
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 15px 0px ${({ theme }) => theme.colors.mainBlue};
  }
`;

const Text = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => `${theme.spacings.sm}`};
`;

type CharacterCardProps = {
  items: ResponseType;
};

export const CharacterCard = ({ items }: CharacterCardProps) => {
  const navigate = useNavigate();
  return (
    <CardsWrapper>
      {items.results.map(({ id, image, name }) => (
        <Card key={id} onClick={() => navigate(`/character/${id}`)}>
          <img src={image} alt={name} />
          <Text>{name}</Text>
        </Card>
      ))}
    </CardsWrapper>
  );
};
