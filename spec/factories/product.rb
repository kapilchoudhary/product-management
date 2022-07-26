FactoryBot.define do
  factory :product do
    name { 'Mobile' }
    upc { '1111111111' }
    available_on { Date.today + 1.day}
  end
end
