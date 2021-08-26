class WinnersController < ApplicationController
  def create
    @winner = Winner.create!(winner_params)
    if @winner
      render json: winners
    else
      render json: @winner.errors
    end
  end

  private

  def winner_params
    params.require(:winner).permit(:name, :time)
  end
  
  def winners
    @winners = Winner.all.map do |winner|
      { id: winner[:id], name: winner[:name], time: winner[:time] }
    end
  end
end
