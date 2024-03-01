# PumpUp Nutrition - Supplement Store Project

Welcome to PumpUp Nutrition, This project is built using Express, Pug, MongoDB, and Node.js.

## Overview

PumpUp Nutrition is an online supplement store where users can explore and purchase a variety of nutritional supplements. The project includes three main pages:

1. **Home Page:**

   - A static page with visually appealing designs.
   - Introduces users to the PumpUp Nutrition store.

2. **Product Page:**

   - Displays a list of supplements fetched from the MongoDB database.
   - Each supplement includes details such as name, category, description, price, and quantity available.

3. **Admin Page:**
   - Designed for admin use.
   - Allows admins to manage in-stock products.
   - Admins can add new products to the database.

## Project Structure

The project is structured as follows:

- `index.js`: Main entry point for the Express application.
- `views/`: Contains plug templates for rendering pages.
- `public/`: Holds static assets such as stylesheets, images, etc.
- `modules/`: Includes route handlers for different pages and database connectivity.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js and npm
- MongoDB

### Installation

1. Clone the repository: `git clone [https://github.com/yashmodi9998/Assignment1-NodeJs.git](https://github.com/yashmodi9998/Assignment1-NodeJs.git)`
2. Install dependencies: `npm install`
3. Start the server: `npm run dev`

Visit `http://localhost:8888` in your browser to explore the PumpUp Nutrition store.

## Usage

- Navigate to the Home and Product pages to explore and purchase supplements.
- Admins can manage in-stock products and add new products on the Admin page.

## Acknowledgments

- All images used in this project are sourced from Freepik.
