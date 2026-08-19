# React_Redux

A hands-on React & Redux tutorial covering the fundamentals of state management, Redux concepts, and how to integrate Redux with React applications. Perfect for beginners looking to build a strong foundation in modern React state management.

## Features

- **State Management with Redux Toolkit:** Efficiently manage application state using Redux Toolkit, the official, opinionated, and batteries-included toolset for Redux.
- **React Integration:** Seamlessly connect Redux state and actions to React components using `react-redux`.
- **Dynamic Product Listing:** Display a list of products, fetched from a mock data source.
- **Favorite Management:** Implement functionality to add and remove products from a favorites list using Redux.
- **Modern Tooling:** Built with Vite for a fast development experience, TypeScript for type safety, and Tailwind CSS for utility-first styling.
- **React Compiler:** Enabled for potential performance optimizations in React components.

## Tech Stack

- **Frontend Framework:** React
- **State Management:** Redux Toolkit, React-Redux
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Linting:** ESLint

## Installation

Follow these steps to set up the project locally:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/thekinv21/React_Redux.git
    cd React_Redux
    ```

2.  **Install dependencies:**
    This project uses npm as its package manager. You can also use yarn or pnpm.

    ```bash
    npm install
    ```

3.  **Run the development server:**
    This command will start the Vite development server.

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Usage

This project demonstrates a practical application of React and Redux for managing a list of products and their favorite status.

**Core Functionality:**

- **Product Display:** The `App.tsx` component renders a list of products fetched from `src/mock/ProductData.ts`.
- **Favorite Toggle:** Each product card (`ProductCard.tsx`) allows users to toggle its favorite status. Clicking the heart icon will add or remove the product from the Redux store's `favorites` slice.
- **State Synchronization:** `useReduxSelector` and `useReduxDispatch` hooks are used to interact with the Redux store, ensuring that the UI reflects the current favorite status of each product.

**Example Scenario:**

Imagine an e-commerce or product catalog application where users can mark items as favorites. This project provides a simplified model for such a feature.

1.  The application loads a list of products.
2.  Users can click the heart icon next to a product to add it to their favorites.
3.  Clicking the heart icon again removes the product from favorites.
4.  The state of the heart icon (filled/unfilled) visually indicates whether a product is currently in the favorites list.

## Project Structure

The project follows a standard React project structure with specific configurations for Redux and styling:

```
React_Redux/
├── public/
├── src/
│   ├── components/
│   │   ├── ProductCard.tsx
│   ├── hooks/
│   │   ├── index.ts
│   │   ├── useReduxDispatch.ts
│   │   └── useReduxSelector.ts
│   ├── mock/
│   │   ├── index.ts
│   │   └── ProductData.ts
│   ├── provider/
│   │   └── ReduxProvider.tsx
│   ├── store/
│   │   ├── index.ts
│   │   ├── slices/
│   │   │   └── favorites.ts
│   │   └── store.ts
│   ├── type/
│   │   ├── index.ts
│   │   └── product.types.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── eslint.config.js
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

**Key Directories:**

- `src/components`: Contains reusable UI components like `ProductCard`.
- `src/hooks`: Custom React hooks for interacting with Redux (`useReduxDispatch`, `useReduxSelector`).
- `src/mock`: Mock data for products.
- `src/provider`: Redux provider component.
- `src/store`: Redux store configuration, reducers, and slices.
- `src/type`: TypeScript type definitions.
