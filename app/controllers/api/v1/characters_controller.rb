class Api::V1::CharactersController < ApplicationController
  before_action :chars, only: :check_move
  @@found_chars = []

  def index
    @characters = Character.all
    render json: @characters
  end

  def check_move
    @player_choice = { name: params[:name], position: params[:position] }
    if @chars.include?(@player_choice)
      @@found_chars << @player_choice
      render json: { message: 'great, you found one', found_chars: @@found_chars }
    else
      render json: { message: 'look again!' }
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
