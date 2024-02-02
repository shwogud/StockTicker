require 'httparty'

class StocksController < ApplicationController
    def show
        id = params[:id]
        api_key = "LPZyEJYpXd7yOaVCwjxGDDu4UuSEWs_y"
        ticker = params[:id]
        
        begin
            response = HTTParty.get(
                "https://api.polygon.io/v2/aggs/ticker/#{ticker}/range/1/year/2023-01-01/2023-12-31?adjusted=true&sort=asc&limit=120&apiKey=#{api_key}"
                )
            Rails.logger.info "Received request for stock with response code: #{api_key}"
            if response.code == 200
            data = JSON.parse(response.body)
            render json: data
            else
            render json: { error: 'Failed to fetch stock data' }, status: :unprocessable_entity
            end
        rescue StandardError => e
            render json: { error: e.message }, status: :unprocessable_entity
        end
    end
end