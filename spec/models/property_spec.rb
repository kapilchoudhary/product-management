require 'rails_helper'

RSpec.describe Property do

  describe 'associations' do
    it { is_expected.to belong_to(:product) }
  end
end
