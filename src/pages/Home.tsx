import styled from "styled-components";
import useFetchItems from "../utils/hooks/useFetchItems";

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.lightGray};
  padding: ${({ theme }) => `${theme.spacings.xl}`};
`;

export const Home = () => {
  const fetchedItemsData = useFetchItems();
  console.log(fetchedItemsData);

  return (
    <Wrapper>
      {fetchedItemsData?.results.map((item) => (
        <div>{item.name}</div>
      ))}
    </Wrapper>
  );
};
