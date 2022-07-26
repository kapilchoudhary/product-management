class AddLengthLimitsToColumns < ActiveRecord::Migration[6.1]
  def change
    change_column :products, :name, :string, limit: 1024, unique: true
    change_column :products, :upc, :string, limit: 1024, unique: true
    change_column :properties, :name, :string, limit: 255, unique: true
  end
end
