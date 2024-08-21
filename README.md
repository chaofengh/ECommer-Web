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
[home page.pdf](https://github.com/user-attachments/files/16698203/home.page.pdf)

### 2. Product Detail Page

When a product image is clicked, the user is taken to the product detail page where they can view more information about the product, such as the description, price, and related products.
[item page.pdf](https://github.com/user-attachments/files/16698204/item.page.pdf)

### 3. Related Products Section

On the product detail page, users can see related products that may interest them.
[item page.pdf](https://github.com/user-attachments/files/16698204/item.page.pdf)

### 4. Cart

The cart allows users to review their selected items, update quantities, and proceed to checkout.
[cart.pdf](https://github.com/user-attachments/files/16698217/cart.pdf)

### 5. Checkout - Billing Information

The first step of the checkout process collects the user's billing information, including their name and address.
[check out page1.pdf](https://github.com/user-attachments/files/16698156/check.out.page1.pdf)
cart.pdf)

### 6. Checkout - Payment Information

The second step of the checkout process collects payment information, which is securely processed via Stripe.
<img width="1913" alt="Screenshot 2024-08-21 at 3 06 57 PM" src="https://github.com/user-attachments/assets/238361a6-51f1-4c9e-bc1e-94deee58642c">

### 7. Order Confirmation

After successful payment, users are shown a confirmation page with a success message.
<img width="1896" alt="Screenshot 2024-08-21 at 3 06 15 PM" src="https://github.com/user-attachments/assets/543928ba-a063-4e14-81f2-1604a4b80da5">

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
