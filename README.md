# 🛍️ Product List App (React Native + Expo)

A simple React Native app built using Expo that displays a list of products with their name, description, price, and image. Users can tap on a product to view full details and simulate a "Buy Now" action. Built with Context API and React Navigation.

---

## ✨ Features

- 🗂 Product List Screen
  - Displays all products with name, price, and thumbnail.
  - Search bar to filter products by name.

- 📄 Product Details Screen
  - Shows full product info including a larger image and description.
  - Includes a **Buy Now** button with alert action.

- 🔄 Navigation
  - Seamless navigation between list and details using **React Navigation**.

- 🌐 State Management
  - Uses **Context API** to manage and access product data globally.

- 🎨 Clean UI
  - Includes basic styling for better user experience.

---

## 📁 Project Structure

ProductListApp/
├── assets/
│   └── sample images here
├── components/
│   └── ProductCard.js
├── context/
│   └── ProductContext.js
├── screens/
│   ├── ProductListScreen.js
│   └── ProductDetailsScreen.js
├── App.js


---

## 🚀 Getting Started

### 1. Clone the Repo

bash
git clone https://github.com/wizard2804/ProductListApp
cd ProductListApp

### 2. Install Dependencies
   npm install

### 3. Run the App
   npm start

   --- Scan the QR code using Expo Go App on your mobile.
   --- Or press w to open in your browser (Web).
