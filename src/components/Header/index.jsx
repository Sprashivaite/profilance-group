import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { signOut } from "../../store/userReducer";
import { NEWS_URL, IMAGE_URL } from "../../consts";
import { AuthModal } from "../AuthModal";
import "./styles.sass";

export const Header = () => {
  const state = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <div className="header">
        <div className="header__container">
          <img
            onClick={() => navigate("/")}
            src={IMAGE_URL}
            alt="Profilance Group Logo"
            className="header__logo"
          />

          <nav className="header__nav">
            <Button
              className="header__button"
              onClick={() => navigate(NEWS_URL)}
              children="Новости"
            />

            {state.isAuthorized ? (
              <Button
                className="header__button"
                onClick={() => dispatch(signOut())}
                children="Выход"
              />
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
