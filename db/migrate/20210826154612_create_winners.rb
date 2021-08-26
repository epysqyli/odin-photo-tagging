class CreateWinners < ActiveRecord::Migration[6.1]
  def change
    create_table :winners do |t|
      t.string :name
      t.integer :time

      t.timestamps
    end
  end
end
