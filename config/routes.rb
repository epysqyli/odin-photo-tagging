Rails.application.routes.draw do
  get 'game/home', to: 'game#home'
  get 'game/play', to: 'game#play'
end
