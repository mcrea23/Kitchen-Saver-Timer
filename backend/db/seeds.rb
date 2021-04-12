# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


breakfast = Meal.create(name: 'Breakfast')
lunch = Meal.create(name: 'Lunch')
dinner = Meal.create(name: 'Dinner')

Dish.create([
  {
    :name => 'French Toast',
    :notes => 'Yummy breakfast the kids will enjoy',
    :meal_id => 'breakfast.id'
  },

  {
    :name => 'BLT',
    :notes => 'Easy and delicious',
    :meal_id => 'lunch.id'
  },

  { 
  :name => 'Tacos',
  :notes => 'Did someone say Taco Tuesday?',
  :meal_id => 'dinner.id'
  }
])