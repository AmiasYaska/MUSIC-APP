json.extract! song, :id, :title, :description, :image, :audio, :created_at, :updated_at
json.url song_url(song, format: :json)
json.description song.description.to_s
json.image url_for(song.image)
json.audio url_for(song.audio)
