class Api::V1::ZoosController < ApplicationController
  def index
    zoos = Zoo.all
    render json: zoos, only: [:id, :name, :state, :facility, :address, :longitude, :latitude]
  end

  def new
  end

  def create
    zoo = Zoo.create(zoo_params)
    render json: zoo
  end
# please work
  private

  def zoo_params
    params.require(:zoo).permit(:name, :state, :facility, :address, :longitude, :latitude)
  end
end
