import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../store/userReducer";
import { AuthModal } from "../AuthModal";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./styles.sass";

import { AUTHORIZATION_URL, MAIN_URL, NEWS_URL, IMAGE_URL } from "../../consts";

export const Header = () => {
  const state = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <div className="header">
        <div className="header__container">
          <img
            onClick={() => navigate(MAIN_URL)}
            src={IMAGE_URL}
            alt="Profilance Group Logo"
            className="header__logo"
          />

          <nav className="header__nav">
            <Button
              className="header__button"
              onClick={() => navigate(MAIN_URL)}
            >
              Главная
            </Button>

            <Button
              className="header__button"
              onClick={() => navigate(NEWS_URL)}
            >
              Новости
            </Button>

            {state.isAuthorized ? (
              <Button
                className="header__button"
                onClick={() => dispatch(signOut())}
              >
                Выход
              </Button>
            ) : (
              <AuthModal className="header__button" />
            )}
          </nav>
        </div>
      </div>
      <Outlet />
    </>
  );
};
