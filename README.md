
# Redux Toolkit Tutorial

A hands-on React & Redux tutorial project demonstrating the fundamentals of state management with Redux Toolkit, core Redux concepts, and seamless integration with React applications. This project is ideal for beginners aiming to build a solid understanding of modern React state management techniques.

<img width="766" height="400" alt="1680738181127" src="https://github.com/user-attachments/assets/8799744c-f812-4596-9a69-85b119b4f085" />

## Description

This repository contains a practical implementation of a React application utilizing Redux Toolkit for robust state management. It showcases how to manage a list of products, allow users to favorite items, and fetch user profile information. The project is built with modern tools like Vite for a fast development experience, TypeScript for type safety, and Tailwind CSS for efficient styling.

## Features

- **State Management with Redux Toolkit:** Efficiently manage application state using Redux Toolkit, the official, opinionated, and batteries-included toolset for Redux.
- **React Integration:** Seamlessly connect Redux state and actions to React components using `react-redux`.
- **Dynamic Product Listing:** Display a list of products, fetched from a mock data source using `json-server` (simulated via `db.json`).
- **Favorite Management:** Implement functionality to add and remove products from a favorites list using Redux slices.
- **User Profile Fetching:** Asynchronously fetch user profile data using `createAsyncThunk` from Redux Toolkit.
- **Modern Tooling:** Built with Vite for a fast development experience, TypeScript for type safety, and Tailwind CSS for utility-first styling.
- **React Compiler:** Enabled via Vite plugin for potential performance optimizations in React components.
- **Icon Integration:** Utilizes `lucide-react` for a variety of scalable icons.

## Tech Stack

- **Frontend Framework:** React
- **State Management:** Redux Toolkit, React-Redux
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Linting:** ESLint
- **Mock Data:** JSON Server (simulated)

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

3.  **Start the JSON server (for mock data):**
    The project relies on a local JSON server for product and user data. Ensure it's running.

    ```bash
    npx json-server --watch db.json --port 8080
    ```

4.  **Run the development server:**
    This command will start the Vite development server.

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Usage

This project demonstrates a practical application of React and Redux for managing a list of products and their favorite status, along with fetching user data.

**Core Functionality:**

- **Product Display:** The `App.tsx` component renders a list of products. These products are fetched from `http://localhost:8080/products` via the `useFetchProducts` hook.
- **Favorite Toggle:** Each product card (`src/components/ProductCard.tsx`) allows users to toggle its favorite status. Clicking the heart icon will add or remove the product from the Redux store's `favorites` slice using the `toggleFavorite` action.
- **State Synchronization:** Custom hooks `useReduxSelector` and `useReduxDispatch` are used to interact with the Redux store, ensuring that the UI accurately reflects the current favorite status of each product and the user's profile information.
- **User Profile Fetching:** The 'Get User' button in the header triggers the `getUserProfile` async thunk, fetching user data from `http://localhost:8080/profile` and displaying the user's full name.

**Example Scenario:**

Imagine an e-commerce or product catalog application where users can mark items as favorites and view their profile information.

1.  The application loads a list of products.
2.  Users can click the heart icon next to a product to add it to their favorites.
3.  Clicking the heart icon again removes the product from favorites.
4.  The state of the heart icon (filled/unfilled) visually indicates whether a product is currently in the favorites list.
5.  Clicking the 'Get User' button fetches and displays the user's full name.

## Project Structure

The project follows a standard React project structure with specific configurations for Redux and styling:

```
React_Redux/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── ProductCard.tsx
│   │   └── ProductList.tsx
│   ├── hooks/
│   │   ├── index.ts
│   │   ├── useFetchProducts.ts
│   │   ├── useReduxDispatch.ts
│   │   └── useReduxSelector.ts
│   ├── provider/
│   │   └── ReduxProvider.tsx
│   ├── store/
│   │   ├── favorite/
│   │   │   └── favorite.slice.ts
│   │   ├── user/
│   │   │   ├── user.actions.ts
│   │   │   └── user.slice.ts
│   │   ├── index.ts
│   │   └── store.ts
│   ├── type/
│   │   ├── index.ts
│   │   ├── product.types.ts
│   │   └── user.types.ts
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
└── db.json (Mock data source)
```

**Key Directories:**

- `src/components`: Contains reusable UI components like `Header`, `ProductCard`, and `ProductList`.
- `src/hooks`: Custom React hooks for interacting with Redux (`useReduxDispatch`, `useReduxSelector`) and fetching data (`useFetchProducts`).
- `src/mock`: Mock data definitions (note: `db.json` is the active mock data source).
- `src/provider`: Provides the Redux `Provider` component.
- `src/store`: Redux store configuration, including slices (`favorite`, `user`), actions, and the main store setup.
- `src/type`: TypeScript type definitions for products and users.

## API Reference (Simulated)

This project simulates API interactions using `json-server` and `fetch`. The following endpoints are used:

- **`GET /products`**: Fetches a list of products.
- **`GET /profile`**: Fetches user profile information.

The mock data for these endpoints is provided in `db.json`.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

Please ensure your code adheres to the project's coding standards and includes relevant documentation.
