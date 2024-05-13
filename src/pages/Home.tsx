import styled from "styled-components";
import { useState } from "react";
import useFetchItems from "../utils/hooks/useFetchItems";
import { CharacterCard } from "../components/CharacterCard";

const PageWrapper = styled.div`
  padding: ${({ theme }) => `${theme.spacings.xl}`};
  background-color: ${({ theme }) => theme.colors.lightGray};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
  const [page, setPage] = useState(1);
  const { items, loading } = useFetchItems(page);
  const PageNumber = items?.info.pages;

  const generatePageNumbers = (totalPages: number) =>
    Array.from({ length: totalPages }, (_, index) => index + 1);

  const Pages = generatePageNumbers(Number(PageNumber));

  return (
    <PageWrapper>
      {loading && <div>Loading...</div>}
      {!loading && items && <CharacterCard items={items} />}
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
