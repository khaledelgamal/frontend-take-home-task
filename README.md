# Frontend Take-Home Task - Bundle Builder

## Task Description
This project is a React-based frontend application that implements a custom "Bundle Builder" interface. It allows users to construct a product bundle by selecting a base plan, adding required and optional accessories, choosing variants (like colors), and adjusting quantities. The interface dynamically updates the cart, computes total savings and prices, and includes features like local storage persistence for a seamless shopping experience.

## Tech Stack
- **Framework:** React 19, Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **State Management:** Zustand
- **Routing:** React Router v7
- **UI Components & Utilities:** Radix UI (Accordion), Sonner (Toast notifications), DOMPurify (XSS protection)

## Installation Guide

This project uses `pnpm` as the package manager. 

### How to install `pnpm`
If you don't have `pnpm` installed, you can install it globally via npm:
```bash
npm install -g pnpm
```
Alternatively, you can follow other installation methods on the [official pnpm documentation](https://pnpm.io/installation).

### Setup Instructions
1. Clone the repository and navigate to the project directory (if not already there):
   ```bash
   cd frontend-take-home-task
   ```
2. Install the dependencies:
   ```bash
   pnpm install
   ```
3. Start the development server:
   ```bash
   pnpm run dev
   ```
4. Open your browser and navigate to the local URL provided in your terminal (typically `http://localhost:5173/`).

## Trade-offs & Architecture Decisions

1. **Variant Schema Design:** 
   When designing the JSON schema for product data, I considered whether variants should just return the colors, with the rest of the product data being shared. However, in real-world online shopping, different colors of a single product often have their own specific prices (e.g., if a color is in high demand), unique stock quantities, or different sale prices. Therefore, the variant is designed as an array of objects, where each object includes `id`, `color`, `price`, `img_url`, `stock quantity`, and potentially `sale_price` and `discount_percentage`. This provides the flexibility needed for a fully-featured e-commerce platform.

2. **Unified Product Schema:**
   Instead of maintaining separate schemas for products with variants and products without variants, I decided to generalize the schema. For products that do not have multiple variants, they still include a `variants` array with exactly 1 object (acting as the main product). This simplifies logic and eliminates the need for complex conditional rendering across the application.

3. **Frontend Price Calculations:**
   I implemented the total price and savings calculations on the frontend so that the page works smoothly and provides immediate feedback to the user. However, as a trade-off, this is generally not a safe practice for production environments. In a real-world application, these calculations should ultimately be validated and finalized on the backend to prevent tampering.

4. **Handling Prices as Strings:**
   Prices are stored and manipulated as strings rather than numbers. While this makes calculations slightly more complex on the frontend (requiring parsing), it was chosen to reflect real-world scenarios where many backends return financial data as strings to avoid floating-point precision issues and to strictly control formatting.
