import { ArrowSquareUpRight, Buildings, GithubLogo, Users } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PostCard } from "../../components/PostCard";
import { GithubContext } from "../../contexts/GithubContext";
import {
  BlogContainer,
  BlogList,
  PostsGrid,
  Profile,
  ProfileInfo,
  ProfileInfoContainer,
  ProfileName,
  Search,
  SearchInput,
} from "./styles";

export function Blog() {
  const { user, organization, issues, fetchIssues } = useContext(GithubContext);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchIssues(search);
  }, [search]);

  return (
    <BlogContainer>
      <Profile>
        <img src={user.avatar_url} alt="" />
        <ProfileInfoContainer>
          <ProfileName>
            <span>{user.name}</span>
            <a href={user.html_url} target="_blank">
              GITHUB
              <ArrowSquareUpRight />
            </a>
          </ProfileName>
          <p>{user.bio}</p>

          <ProfileInfo>
            <div>
              <GithubLogo size={18} />
              <span>{user.login}</span>
            </div>

            <div>
              <Buildings size={18} />
              <span>{organization}</span>
            </div>

            <div>
              <Users size={18} />
              <span>{user.followers} seguidores</span>
            </div>
          </ProfileInfo>
        </ProfileInfoContainer>
      </Profile>

      <BlogList>
        <Search>
          <div>
            <h2>Publicações</h2>
            <span>{issues.length} publicações</span>
          </div>
          <SearchInput
            type="text"
            placeholder="Buscar conteúdo"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Search>

        <PostsGrid>
          {issues.length === 0 && <p>Nenhuma publicação encontrada.</p>}
          {issues.map((issue) => {
            return (
              <Link key={issue.number} to={`/post/${issue.number}`}>
                <PostCard title={issue.title} createdAt={issue.created_at} body={issue.body} />
              </Link>
            );
          })}
        </PostsGrid>
      </BlogList>
    </BlogContainer>
  );
}
