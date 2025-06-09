import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ArrowLeft, ArrowSquareUpRight, Calendar, ChatCircle, GithubLogo } from "phosphor-react";
import { useContext } from "react";
import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import { GithubContext } from "../../contexts/GithubContext";
import { PostBody, PostContainer, PostHeader, PostHeaderInfo, PostHeaderLinks } from "./styles";

export function Post() {
  const { id } = useParams();
  const { issues } = useContext(GithubContext);
  const issue = issues.find((issue) => issue.number === Number(id));

  return (
    <PostContainer>
      <PostHeader>
        <PostHeaderLinks>
          <Link to="/">
            <ArrowLeft size={16} /> Voltar
          </Link>
          <a href={issue?.html_url} target="_blank">
            Ver no github
            <ArrowSquareUpRight size={16} />
          </a>
        </PostHeaderLinks>

        <h1>{issue?.title}</h1>

        <PostHeaderInfo>
          <div>
            <GithubLogo size={18} />
            <span>{issue?.user.login}</span>
          </div>

          <div>
            <Calendar size={18} />
            <span>
              {formatDistanceToNow(new Date(issue?.created_at || ""), {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
          </div>

          <div>
            <ChatCircle weight="fill" size={18} />
            <span>{issue?.comments} comentários</span>
          </div>
        </PostHeaderInfo>
      </PostHeader>

      <PostBody>
        <ReactMarkdown>{issue?.body}</ReactMarkdown>
      </PostBody>
    </PostContainer>
  );
}
