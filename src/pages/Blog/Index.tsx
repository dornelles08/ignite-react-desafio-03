import { ArrowSquareUpRight, Buildings, GithubLogo, Users } from "phosphor-react";
import {
  BlogContainer,
  BlogList,
  Profile,
  ProfileInfo,
  ProfileInfoContainer,
  ProfileName,
  Search,
} from "./styles";

export function Blog() {
  return (
    <BlogContainer>
      <Profile>
        <img src="https://github.com/dornelles08.png" alt="" />
        <ProfileInfoContainer>
          <ProfileName>
            <span>Felipe Dornelles</span>
            <a href="https://github.com/dornelles08" target="_blank">
              GITHUB
              <ArrowSquareUpRight />
            </a>
          </ProfileName>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam
            dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
          </p>

          <ProfileInfo>
            <div>
              <GithubLogo size={18} />
              <span>dornelles08</span>
            </div>

            <div>
              <Buildings size={18} />
              <span>Semantix</span>
            </div>

            <div>
              <Users size={18} />
              <span>32 seguidores</span>
            </div>
          </ProfileInfo>
        </ProfileInfoContainer>
      </Profile>

      <BlogList>
        <Search>
          <div>
            <h2>Publicações</h2>
            <span>6 publicações</span>
          </div>
          <input type="text" placeholder="Buscar conteúdo" />
        </Search>
      </BlogList>
    </BlogContainer>
  );
}
