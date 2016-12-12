class CreateNotes < ActiveRecord::Migration[5.0]
  def change
    create_table :notes do |t|
      t.string :name, null: false
      t.text :content

      t.timestamps
    end
  end
end
