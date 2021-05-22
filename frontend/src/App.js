import { createClient, Provider, useMutation, useQuery } from "urql";
import PostsPage from "./pages/PostsPage";

const urqlClient = createClient({
  url:
    process.env.REACT_APP_GRAPHQL_ENDPOINT_URL ||
    "http://localhost:4000/graphql",
});

export default function App() {
  return (
    <Provider value={urqlClient}>
      <PostsPage />
    </Provider>
  );
}
