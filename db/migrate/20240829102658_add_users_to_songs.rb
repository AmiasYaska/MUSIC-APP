class AddUsersToSongs < ActiveRecord::Migration[7.1]
  def change
    add_reference :songs, :user, null: false, foreign_key: true
  end
end
