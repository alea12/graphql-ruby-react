export default function PostList({ postListQueryResult, updateSelectedPost }) {
  const { fetching, error, data } = postListQueryResult;
  if (fetching) return "fetching...";
  if (error) return `error: ${error.message}`;
  const posts = data.posts;

  return (
    <>
      <h2>List of Posts</h2>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <a href={`#${p.id}`} onClick={() => updateSelectedPost(p.id)}>
              {p.id} [{p.createdAt}]: {p.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
