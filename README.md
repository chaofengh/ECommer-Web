# E-Commerce Website

This is a fully functional e-commerce website built with a Strapi backend and a React frontend. The website allows users to browse products, view product details, add items to the cart, and checkout using Stripe for payments.

## Features

- **Home Page**: Displays featured products and promotional banners.
- **Product Listing**: Browse through a variety of products categorized by "New Arrivals", "Best Sellers", and "Top Rated".
- **Product Detail**: View detailed information about each product, including images, descriptions, and price.
- **Related Products**: Shows related items on the product detail page.
- **Cart**: Users can add items to their cart, update quantities, and proceed to checkout.
- **Checkout Process**: Includes forms for billing information, payment information (integrated with Stripe), and order confirmation.

## Pages

### 1. Home Page

The homepage showcases a summer sale banner and features a selection of products. Users can browse all products or filter by categories like "New Arrivals", "Best Sellers", and "Top Rated".
<img width="1914" alt="home page" src="https://github.com/user-attachments/assets/19dedb7c-c943-4e8a-abec-73bcdc8c2569">
<img width="1920" alt="home page 2" src="https://github.com/user-attachments/assets/5b7966fb-17e4-48c7-a479-ccbbfd93458a">

### 2. Product Detail Page

When a product image is clicked, the user is taken to the product detail page where they can view more information about the product, such as the description, price, and related products.
<img width="1920" alt="item detail" src="https://github.com/user-attachments/assets/ca72d4aa-e26c-49ff-8fa3-8e449858072d">

### 3. Related Products Section

On the product detail page, users can see related products that may interest them.
<img width="1919" alt="related product" src="https://github.com/user-attachments/assets/b7da9cbd-d5c0-4f78-9d25-fb782f9a0aed">

### 4. Cart

The cart allows users to review their selected items, update quantities, and proceed to checkout.
<img width="1920" alt="check out page" src="https://github.com/user-attachments/assets/eb13765b-01ee-495f-b2d3-ab2a8c1f1391">

### 5. Checkout - Billing Information

The first step of the checkout process collects the user's billing information, including their name and address.
<img width="1920" alt="billing info" src="https://github.com/user-attachments/assets/7d4d4c59-118a-43bb-8888-b81d8048e0d9">

### 6. Checkout - Payment Information

The second step of the checkout process collects payment information, which is securely processed via Stripe.
<img width="1896" alt="Screenshot 2024-08-21 at 3 06 15 PM" src="https://github.com/user-attachments/assets/543928ba-a063-4e14-81f2-1604a4b80da5">

### 7. Order Confirmation

After successful payment, users are shown a confirmation page with a success message.
<img width="1896" alt="Screenshot 2024-08-21 at 3 06 15 PM" src="https://github.com/user-attachments/assets/543928ba-a063-4e14-81f2-1604a4b80da5">
<img width="1913" alt="Screenshot 2024-08-21 at 3 06 57 PM" src="https://github.com/user-attachments/assets/238361a6-51f1-4c9e-bc1e-94deee58642c">

## Technology Stack

- **Frontend**: React, Redux, and CSS
- **Backend**: Strapi (Node.js, Express)
- **Database**: SQLite (for development)
- **Payment Processing**: Stripe

## Setup and Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/chaofengh/ecommerce-web.git
    cd ecommerce-web
    ```

2. **Install dependencies**:
    - For the backend:
      ```bash
      cd server
      npm install
      ```
    - For the frontend:
      ```bash
      cd client
      npm install
      ```

3. **Configure environment variables**:
    - Backend: Create a `.env` file in the `server` directory and add your Stripe secret key and other necessary environment variables.
    - Example:
      ```
      STRIPE_SECRET_KEY=your_stripe_secret_key
      ```

4. **Start the development server**:
    - Backend:
      ```bash
      cd server
      npm start
      ```
    - Frontend:
      ```bash
      cd client
      npm start
      ```

5. **View the website**:
    Open your browser and go to `http://localhost:3000` to view the website.

## Contributing

Feel free to fork the repository and submit pull requests. All contributions are welcome.

## License

This project is licensed under the MIT License.
