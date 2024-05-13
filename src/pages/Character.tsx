import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useFetchItems from "../utils/hooks/useFetchItems";

const Wrapper = styled.div`
  padding: ${({ theme }) => `${theme.spacings.xl}`};
  background-color: ${({ theme }) => theme.colors.lightGray};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Character = () => {
  const navigate = useNavigate();
  const fetchedItemsData = useFetchItems();

  return <Wrapper>Character</Wrapper>;
};
