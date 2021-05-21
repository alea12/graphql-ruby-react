import { useState } from "react";
import { createClient, Provider, useQuery } from "urql";

const urqlClient = createClient({ url: "http://localhost:4000/graphql" });

export default function App() {
  return (
    <Provider value={urqlClient}>
      <h1>GraphQL Ruby (Backend) + React (Frontend) Test Application</h1>
      <PostList />
    </Provider>
  );
}

const postListQuery = `
  query allPosts {
    posts {
      id
      title
    }
  }
`;

function PostList() {
  const [selectedPostId, setSelectedPostId] = useState(null);

  const [result] = useQuery({ query: postListQuery });
  const { fetching, error, data } = result;
  if (fetching) return "fetching...";
  if (error) return `error: ${error.message}`;

  return (
    <>
      <h2>List of Posts</h2>
      <ul>
        {data.posts.map((p) => (
          <li key={p.id} onClick={() => setSelectedPostId(p.id)}>
            {p.id}: {p.title}
          </li>
        ))}
      </ul>
      {selectedPostId && <PostDetail id={selectedPostId} />}
    </>
  );
}

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

function PostDetail({ id }) {
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
