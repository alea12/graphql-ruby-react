import { useState } from "react";
import { useQuery } from "urql";

import PostList from "../components/PostList";
import PostDetail from "../components/PostDetail";
import CreatePostForm from "../components/CreatePostForm";

const postListQuery = `
  query allPosts {
    posts {
      id
      title
      createdAt
    }
  }
`;

export default function PostsPage() {
  const [selectedPostId, setSelectedPostId] = useState();
  function updateSelectedPost(id) {
    setSelectedPostId(id);
  }

  const [postListQueryResult, rerunPostListQuery] = useQuery({
    query: postListQuery,
  });

  return (
    <>
      <h1>GraphQL Ruby (Backend) + React (Frontend) Test Application</h1>
      <PostList
        postListQueryResult={postListQueryResult}
        updateSelectedPost={updateSelectedPost}
      />
      {selectedPostId && <PostDetail id={selectedPostId} />}
      <CreatePostForm rerunPostListQuery={rerunPostListQuery} />
    </>
  );
}
