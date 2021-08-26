Rails.application.routes.draw do
  root 'game#home'
  get 'game/play', to: 'game#play'

  namespace :api do
    namespace :v1 do
      post 'characters/check_move'
      post 'winners/create'
    end
  end
end
