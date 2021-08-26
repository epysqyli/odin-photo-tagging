class Winner < ApplicationRecord
  validates :name, presence: true, length: { minimum: 3, maximum: 25 }
  validates :time, presence: true
end
