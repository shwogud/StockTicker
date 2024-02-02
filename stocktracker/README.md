<!-- @format -->

# StockTicker

Given a stock ticker calls external Polygon API to get statistics on stock in 2023

## Description

This is a single-page application (SPA) built with React.js and Ruby on Rails that allows users to input a stock ticker symbol and displays various metrics for the specified stock within the date range of 1/1/2023 to 12/31/2023. The app fetches data from the Polygon.io API to retrieve stock market data.

## Features

- Input field to enter a stock ticker symbol
- Display of average stock price for the specified date range
- Display of maximum and minimum volume for the specified date range
- Display of maximum and minimum stock price for the specified date range

## Technologies Used

- React.js
- Redux (for state management)
- Ruby on Rails (backend server)
- Polygon.io API (for stock market data)
- HTTParty gem (for making HTTP requests in Rails)
- SCSS (for styling)

## Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies for both the frontend (React.js) and backend (Ruby on Rails) by running:
   `npm install` and `bundle install`
4. Start the Rails server with `rails s` and React server with `npm start`

## Usage

1. Enter a stock ticker symbol in the input field.
2. Press the "Search" button to retrieve statistics for the specified stock.
3. View the average stock price, maximum/minimum volume, and maximum/minimum stock price for the specified date range.
