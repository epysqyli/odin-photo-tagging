Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'characters/index'
    end
  end
  root 'game#home'
  get 'game/play', to: 'game#play'
end
