import { useSelector } from "react-redux";

import "./styles.sass";

export const MainPage = () => {
  const state = useSelector((state) => state.userReducer);

  return (
    <div className="main-page">
      <h1 className="main-page__title">
        Привет, {state.isAuthorized ? state.login : "Гость"}
      </h1>
    </div>
  );
};
