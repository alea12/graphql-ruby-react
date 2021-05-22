import { useState } from "react";
import { useMutation } from "urql";

const createPostMutation = `
  mutation createPost($title: String!, $body: String!) {
    createPost(input: {title: $title, body: $body}) {
      post {
        id
        title
        body
        createdAt
        updatedAt
      }
      errors
    }
  }
`;

export default function CreatePostForm({ rerunPostListQuery }) {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  function handleFormUpdate(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const [_result, createPost] = useMutation(createPostMutation);

  function handleFormSubmit(e) {
    e.preventDefault();

    createPost(formData).then((result) => {
      if (result.data.createPost.errors.length > 0) {
        alert(JSON.stringify(result.data.createPost.errors, null, 2));
      } else {
        rerunPostListQuery();
        setFormData({
          title: "",
          body: "",
        });
      }
    });
  }

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            name="title"
            placeholder="title"
            value={formData.title}
            onChange={handleFormUpdate}
          />
        </div>
        <div>
          <textarea
            name="body"
            placeholder="body"
            value={formData.body}
            onChange={handleFormUpdate}
          />
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}
