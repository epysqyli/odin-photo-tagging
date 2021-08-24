class Api::V1::CharactersController < ApplicationController
  before_action :chars, only: :check_move

  def index
    @characters = Character.all
    render json: @characters
  end

  def check_move
    @player_choice = { name: params[:name], position: params[:position] }
    if @chars.include?(@player_choice)
      render json: { message: 'great, you found one' }
      puts 'yesss'
    else
      render json: { message: 'look again!' }
      puts 'noooo'
    end
    # render json: @player_choice
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
