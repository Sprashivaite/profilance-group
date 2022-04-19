import { Route, Routes, Link } from "react-router-dom";

import { AUTHORIZATION_URL, MAIN_URL, NEWS_URL } from "../consts";
import { MainPage } from "../pages/MainPage";
import ErrorBoundary from "./ErrorBoundary";
import { AuthModal } from "./AuthModal";
import { NewsPage } from "../pages/NewsPage";
import { Header } from "./Header";

export const AppRouter = () => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path={AUTHORIZATION_URL} element={<AuthModal />} />
          <Route path={MAIN_URL} element={<MainPage />} />
          <Route path={NEWS_URL} element={<NewsPage />} />
          <Route
            path="*"
            element={<Link to={MAIN_URL}>Вернуться на главную страницу</Link>}
          />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
};
