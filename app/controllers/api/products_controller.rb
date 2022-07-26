class Api::ProductsController < ApplicationController

  def index
    @products = Product.all
    render json: @products, :include => {:properties => {}}
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      add_properties
      render json: { status: true, message: 'Product created successfully' }
    else
      render json: { status: false, message: @product.errors }
    end
  end

  def search
    @products = params[:name].present? ? Product.where("name LIKE ?", "%#{params[:name]}%") : []
    render json: @products, :include => {:properties => {}}
  end

  private

  def add_properties
    property_params.each do |params|
      @product.properties.create(params)
    end
  end

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
