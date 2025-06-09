import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: -1;

  img {
    top: 0;
    left: 0;
    width: 100%;
    height: 18.5rem;
    object-fit: cover;
  }
`;
