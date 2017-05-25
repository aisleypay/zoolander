class AddLatitudeAndLongitudeToZoos < ActiveRecord::Migration[5.1]
  def change
    add_column :zoos, :latitude, :float
    add_column :zoos, :longitude, :float
    add_column :zoos, :address, :string
  end
end
