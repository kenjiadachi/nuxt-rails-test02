class User < ApplicationRecord

  # validations
  validates :name, presence: true
  validates :uid, presence: true
  validates :email, presence: true
end
