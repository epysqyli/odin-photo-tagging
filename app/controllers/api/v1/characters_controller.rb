# api controller - version 1
class Api::V1::CharactersController < ApplicationController
  before_action :chars, only: :check_move
  @@found_chars = []

  def check_move
    @player_choice = { name: params[:name], position: params[:position] }
    if @chars.include?(@player_choice)
      @@found_chars << @player_choice
      if @@found_chars.length < 4
        render json: { message: 'Great, you found one', result: 'found', found_chars: @@found_chars }
      else
        render json: { message: 'You found them all!', result: 'found', found_chars: @@found_chars }
      end
    else
      render json: { message: 'Look again!', result: 'not-found' }
    end
  end

  private

  def player_choice_params
    params.permit(:name, :position)
  end

  def chars
    @chars = Character.all.map do |char|
      { name: char[:name], position: char[:position] }
    end
  end
end
