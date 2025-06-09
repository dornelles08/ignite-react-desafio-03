import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 3rem;

  margin-bottom: 3rem;
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;

  border-radius: 10px;
  background: ${({ theme }) => theme.baseProfile};
  padding: 2rem;
  gap: 2rem;
  margin-top: -5rem;

  width: 100%;
  max-width: 54rem;
`;

export const PostHeaderLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.blue};
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 160%;
    text-transform: uppercase;
    text-decoration: none;
  }
`;

export const PostHeaderInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.baseSubtitle};
    font-size: 1rem;
    font-weight: 400;
    line-height: 160%;
  }
`;

export const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 55rem;

  gap: 1.5rem;
  padding: 2.5rem 2rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.baseText};

  a {
    color: ${({ theme }) => theme.blue};
    text-decoration: none;
  }
  img {
    width: 100%;
    max-width: 55rem;
    margin-bottom: 1rem;
  }
`;
