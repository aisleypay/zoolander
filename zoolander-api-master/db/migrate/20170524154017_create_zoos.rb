class CreateZoos < ActiveRecord::Migration[5.1]
  def change
    create_table :zoos do |t|
      t.string :name
      t.string :state
      t.string :facility

      t.timestamps
    end
  end
end
