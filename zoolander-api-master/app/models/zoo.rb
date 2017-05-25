require "geocoder/stores/active_record"

class Zoo < ApplicationRecord
  include Geocoder::Store::ActiveRecord
  geocoded_by :address
  after_validation :geocode
end
