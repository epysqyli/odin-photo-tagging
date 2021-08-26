Rails.application.routes.draw do
  root 'game#home'
  get 'game/play', to: 'game#play'
  post 'winners/create'

  namespace :api do
    namespace :v1 do
      post 'characters/check_move'
    end
  end
end
