class CreateDishes < ActiveRecord::Migration[6.1]
  def change
    create_table :dishes do |t|

      t.string :name
      t.text :notes
      t.integer :meal_id

      t.timestamps
    end
  end
end
