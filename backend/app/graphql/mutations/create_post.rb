class Mutations::CreatePost < Mutations::BaseMutation
  null true

  # arguments that will be received
  argument :title, String, required: true
  argument :body, String, required: true

  # fields going to be returned
  field :post, Types::PostType, null: true
  field :errors, [String], null: false

  def resolve(title:, body:)
    post = Post.create(title: title, body: body)
    if post.persisted?
      {
        post: post,
        errors: []
      }
    else
      {
        post: nil,
        errors: post.errors.full_messages
      }
    end
  end
end
