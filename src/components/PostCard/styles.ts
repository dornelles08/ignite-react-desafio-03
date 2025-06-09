import styled from "styled-components";

export const PostCardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;
  background: ${({ theme }) => theme.basePost};
  border-radius: 10px;
`;

export const PostCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  h3 {
    color: ${({ theme }) => theme.baseTitle};
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 160%;
    width: 17.6875rem;
  }
  span {
    color: ${({ theme }) => theme.baseSpan};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 160%;
  }
`;

export const PostCardBody = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  max-width: 20rem;
  height: 10.5rem;

  p {
    color: ${({ theme }) => theme.baseText};
    font-size: 1rem;
    font-weight: 400;
    line-height: 160%;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
  }
`;
