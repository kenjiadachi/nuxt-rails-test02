FactoryBot.define do
  factory :user do
    name { 'testuser1' }
    email { 'user@example.com' }
    uid { 'uid' }
    image { 'https://via.placeholder.com/150' }
  end
end