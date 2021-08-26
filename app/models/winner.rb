class Winner < ApplicationRecord
  validates :name, presence: true, length: { maximum: 25 }
  validates :time, presence: true
end
