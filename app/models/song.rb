class Song < ApplicationRecord
  belongs_to :user
  has_rich_text :description
  has_one_attached :image
  has_one_attached :audio
end
