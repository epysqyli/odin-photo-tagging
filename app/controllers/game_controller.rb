class GameController < ApplicationController
  def home; end

  def play
    @winners = Winner.all.map do |winner|
      { id: winner[:id], name: winner[:name], time: winner[:time] }
    end
  end
end
