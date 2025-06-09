import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { PostCardBody, PostCardContainer, PostCardHeader } from "./styles";

interface PostCardProps {
  title: string;
  createdAt: string;
  body: string;
}

export function PostCard({ body, createdAt, title }: PostCardProps) {
  return (
    <PostCardContainer>
      <PostCardHeader>
        <h3>{title}</h3>
        <span>
          {formatDistanceToNow(new Date(createdAt), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </PostCardHeader>

      <PostCardBody>
        <p>{body}</p>
      </PostCardBody>
    </PostCardContainer>
  );
}
