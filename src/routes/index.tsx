import { Routes, Route, createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};
const router = createBrowserRouter([{ path: "*", element: <Router /> }]);

export default router;
