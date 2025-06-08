import { HeaderContainer } from "./styles";

import cover from "../../assets/cover.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={cover} alt="" />
    </HeaderContainer>
  );
}
