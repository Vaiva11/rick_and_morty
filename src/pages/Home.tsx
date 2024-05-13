import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetchItems from "../utils/hooks/useFetchItems";

const PageWrapper = styled.div`
  padding: ${({ theme }) => `${theme.spacings.xl}`};
  background-color: ${({ theme }) => theme.colors.lightGray};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

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

const PaginationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: ${({ theme }) => `${theme.spacings.xl}`};
`;

const PaginationNumber = styled.div`
  margin: ${({ theme }) => `${theme.spacings.xs}`};
  cursor: pointer;
`;

export const Home = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const fetchedItemsData = useFetchItems(page);
  const PageNumber = fetchedItemsData?.info.pages;

  const generatePageNumbers = (totalPages: number) =>
    Array.from({ length: totalPages }, (_, index) => index + 1);

  const Pages = generatePageNumbers(Number(PageNumber));

  return (
    <PageWrapper>
      <CardsWrapper>
        {fetchedItemsData?.results.map(({ id, image, name }) => (
          <Card key={id} onClick={() => navigate(`/character/${id}`)}>
            <img src={image} alt={name} />
            <Text>{name}</Text>
          </Card>
        ))}
      </CardsWrapper>
      <PaginationWrapper>
        {Pages.map((item) => (
          <PaginationNumber key={item} onClick={() => setPage(item)}>
            {item}
          </PaginationNumber>
        ))}
      </PaginationWrapper>
    </PageWrapper>
  );
};
