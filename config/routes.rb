Rails.application.routes.draw do
  root 'home#index'

  namespace 'api' do
    resources :products, only: [:create, :index] do
      post :search, on: :collection
    end
  end

  get '*path', to: 'home#index', via: :all
end
