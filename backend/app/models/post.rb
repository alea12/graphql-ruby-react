class Post < ApplicationRecord
  validates :title, length: { minimum: 10 }
end
