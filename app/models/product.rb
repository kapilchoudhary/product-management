class Product < ApplicationRecord
  has_many :properties

  validates :name, length: { maximum: 1024 }, uniqueness: true
  validates :upc, numericality: { only_integer: true }, uniqueness: true

  validate :check_length
  validate :in_future?

  def check_length
    errors.add(:upc, "Length must be 10 12 or 13") unless upc && [10,12,13].include?(upc.length)
  end

  def in_future?
    errors.add(:available_on, "Time must be in future") if available_on && available_on <= Time.now
  end
end
