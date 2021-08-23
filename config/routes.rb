Rails.application.routes.draw do
  root 'game#home'
  get 'game/play', to: 'game#play'
end
