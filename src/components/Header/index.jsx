import { Outlet, Link } from "react-router-dom";
import { AUTHORIZATION_URL, MAIN_URL, NEWS_URL, IMAGE_URL } from "../../consts";

export const Header = () => {
  return (
    <>
      <img src={IMAGE_URL} alt="Profilance Group Logo" />
      <Link to={MAIN_URL}>Главная</Link>
      <Link to={NEWS_URL}>Новости</Link>
      <Link to={AUTHORIZATION_URL}>Вход/Выход</Link>
      <Outlet />
    </>
  );
};
