import { Route, Routes, Link } from "react-router-dom";

import { AUTHORIZATION_URL, MAIN_URL, NEWS_URL } from "../consts";
import { MainPage } from "../pages/MainPage";
import ErrorBoundary from "./ErrorBoundary";

export const AppRouter = () => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path={AUTHORIZATION_URL} element={<MainPage />} />
        <Route path={MAIN_URL} element={<MainPage />} />
        <Route path={NEWS_URL} element={<MainPage />} />
        <Route
          path="*"
          element={<Link to={MAIN_URL}>Go to the home page</Link>}
        />
      </Routes>
    </ErrorBoundary>
  );
};
