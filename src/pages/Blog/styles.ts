import styled from "styled-components";

export const BlogContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 3rem;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: ${({ theme }) => theme.baseProfile};
  padding: 2rem;
  gap: 2rem;
  margin-top: -5rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`;

export const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  margin-top: 0.5rem;

  p {
    color: ${({ theme }) => theme.baseText};
    font-size: 1rem;
    font-weight: 400;
    line-height: 160%;
    margin-bottom: 1.5rem;
    width: 100%;
    max-width: 38.25rem;
  }
`;

export const ProfileName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: ${({ theme }) => theme.baseTitle};
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 130%;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.blue};
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 160%;
    text-transform: uppercase;
    text-decoration: none;
  }
`;

export const ProfileInfo = styled.div`
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

export const BlogList = styled.div`
  display: flex;
  width: 100%;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
