class CreateProperties < ActiveRecord::Migration[6.1]
  def change
    create_table :properties do |t|
      t.string :name
      t.string :value
      t.references :product, null: false, foreign_key: true

      t.timestamps
    end
  end
end
