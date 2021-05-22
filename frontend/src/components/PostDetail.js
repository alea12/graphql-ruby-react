import { useQuery } from "urql";

const postDetailQuery = `
  query postDetail($id:ID!) {
    post(id:$id) {
      id
      title
      body
      createdAt
      updatedAt
    }
  }
`;

export default function PostDetail({ id }) {
  const [result] = useQuery({ query: postDetailQuery, variables: { id } });
  const { fetching, error, data } = result;
  if (fetching) return "fetching...";
  if (error) return `error: ${error.message}`;

  const post = data.post;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <ul>
        <li>created: {post.createdAt}</li>
        <li>updated: {post.updatedAt}</li>
      </ul>
    </div>
  );
}
