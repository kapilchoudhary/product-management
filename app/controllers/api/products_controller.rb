class Api::ProductsController < ApplicationController

  def index
    @products = Product.all
    render json: @products, :include => {:properties => {}}
  end

  def create
    @product = Product.new(product_params)

    property_params.each do |params|
      @product.properties.create(params)
    end
    render json: {status: true, message: 'Product created successfully'}
  end

  def search
    @products = params[:name].present? ? Product.where("name LIKE ?", "%#{params[:name]}%") : []
    render json: @products, :include => {:properties => {}}
  end

  private

  def product_params
    params.require(:product).permit(
      :name,
      :upc,
      :available_on
    )
  end

  def property_params
    params.permit(properties: [
      :name,
      :value
     ])
     .require(:properties)
  end
end
