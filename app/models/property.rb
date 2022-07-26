class Property < ApplicationRecord
  belongs_to :product

  validates :name, length: { maximum: 255 }, uniqueness: {scope: :product}, presence: :true
end
