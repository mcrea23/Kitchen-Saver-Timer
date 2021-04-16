class Dish < ApplicationRecord
  belongs_to :meal

  def meal_attributes=(name)
    self.meal = Meal.find_or_create_by(name: name)
  end
end
