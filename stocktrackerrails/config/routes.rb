Rails.application.routes.draw do
  get '/stocks/:id', to: 'stocks#show'
end
