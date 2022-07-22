class Api::ProductsController < ApplicationController

  def index
    @products = Product.all
    render json: @products, :include => {:properties => {}}
  end

  def create    
  end

  def search
    @products = params[:name].present? ? Product.where("name LIKE ?", "%#{params[:name]}%") : []
    render json: @products, :include => {:properties => {}}
  end
end
