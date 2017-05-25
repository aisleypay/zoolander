class ZoosSerializer < ActiveModel::Serializer
  attributes :name, :state, :facility, :address, :latitude, :longitude
end
