module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :posts, [PostType], null: false, description: "Lists all posts"
    def posts
      Post.order(id: :asc)
    end

    field :post, PostType, null: false, description: "Returns a single post" do
      argument :id, ID, required: true
    end
    def post(id:)
      Post.find(id)
    end
  end
end
