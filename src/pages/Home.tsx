import styled from "styled-components";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetchItems from "../utils/hooks/useFetchItems";
import { CharacterCard } from "../components/CharacterCard";
import { device } from "../theme/Device";

const H1 = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.mainBlue};
  font-size: ${({ theme }) => theme.fontSizes.h1};
  margin-bottom: ${({ theme }) => `${theme.spacings.xl}`};

  @media ${device.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.h2};
    margin-bottom: ${({ theme }) => `${theme.spacings.md}`};
  }
`;

const PageWrapper = styled.div`
  padding: ${({ theme }) => `${theme.spacings.xl}`};
  background-color: ${({ theme }) => theme.colors.lightGray};
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media ${device.mobile} {
    padding: ${({ theme }) => `${theme.spacings.md}`};
  }
`;

const PaginationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: ${({ theme }) => `${theme.spacings.xl}`};
  font-size: ${({ theme }) => theme.fontSizes.lg};

  @media ${device.mobile} {
    margin-top: ${({ theme }) => `${theme.spacings.md}`};
  }
`;

const PaginationNumber = styled.div<{ isItemSelected: boolean }>`
  margin: ${({ theme }) => `${theme.spacings.xs}`};
  cursor: pointer;
  text-decoration: ${({ isItemSelected }) => isItemSelected && "underline"};
`;

export const Home = () => {
  const navigate = useNavigate();
  const { page } = useParams();
  const [currentPage, setCurrentPage] = useState(Number(page));
  const { items, loading } = useFetchItems(currentPage);
  const PageNumber = items?.info.pages;

  const generatePageNumbers = (totalPages: number) =>
    Array.from({ length: totalPages }, (_, index) => index + 1);

  const Pages = generatePageNumbers(Number(PageNumber));

  return (
    <PageWrapper>
      <H1>Rick & Morty characters</H1>
      {loading && <div>Loading...</div>}
      {!loading && items && <CharacterCard items={items} />}
      <PaginationWrapper>
        {Pages.map((item) => (
          <PaginationNumber
            isItemSelected={item === currentPage}
            key={item}
            onClick={() => {
              setCurrentPage(item);
              navigate(`/home/${item}`);
            }}
          >
            {item}
          </PaginationNumber>
        ))}
      </PaginationWrapper>
    </PageWrapper>
  );
};
