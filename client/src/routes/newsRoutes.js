import HomePage from "../pages/HomePage/HomePage";
import CategoryPage from "../pages/CategoryPage/CategoryPage";

const newsRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/category/:name", element: <CategoryPage /> },
];

export default newsRoutes;