Rails.application.routes.draw do
  root 'products#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '*path', to: 'products#index', via: :all
end
