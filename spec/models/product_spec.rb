require 'rails_helper'

RSpec.describe Product do

  describe 'associations' do
    it { is_expected.to have_many(:properties) }
  end

  describe 'validations' do
    it { should validate_uniqueness_of(:name) }
    it { should validate_uniqueness_of(:upc) }
  end
end
