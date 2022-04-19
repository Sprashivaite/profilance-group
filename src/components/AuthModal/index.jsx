import React, { useState } from "react";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Alert,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../../store/userReducer";
import data from "../../data";
import "./styles.sass";

export const AuthModal = (props) => {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);
  const [isDialogOpened, setIsDialogOpened] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleButtonSignIn = () => {
    const foundUser = data.users.find(
      (user) => user.login === login && user.password === password
    );
    if (foundUser) {
      dispatch(
        signIn({
          login,
          password,
          isAuthorized: true,
          isAdmin: foundUser.isAdmin,
        })
      );
      navigate("/main");
    } else {
      setError(true);
    }
  };

  return (
    <>
      <Button {...props} onClick={() => setIsDialogOpened(true)}>
        Войти
      </Button>
      <Dialog
        open={isDialogOpened}
        onClose={() => setIsDialogOpened(false)}
        maxWidth="xs"
        fullWidth
      >
        <Paper className="auth-modal">
          <DialogTitle>
            <Typography variant="h6" gutterBottom>
              Авторизация
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Box className="auth-modal__container">
              <TextField
                value={login}
                onChange={(event) => setLogin(event.target.value)}
                placeholder="Логин"
              />
              <TextField
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                placeholder="Пароль"
              />
              {error && (
                <Alert severity="error">Неправильный логин или пароль</Alert>
              )}
            </Box>
          </DialogContent>
          <DialogActions>
            <Button className="auth-modal__button" onClick={handleButtonSignIn}>
              Войти
            </Button>
          </DialogActions>
        </Paper>
      </Dialog>
    </>
  );
};
