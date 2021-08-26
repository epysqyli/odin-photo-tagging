class WinnersController < ApplicationController
  def create
    @winner = Winner.create!(winner_params)
    if @winner
      render json: @winner
    else
      render json: @winner.errors
    end
  end

  private

  def winner_params
    params.permit(:name, :time)
  end
end
