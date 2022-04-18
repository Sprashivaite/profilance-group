import React from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const AuthModal = () => {
  return (
    <>
      <Paper>
        <Box margin="20px" display={"flex"} flexDirection="column" gap={"10px"}>
          <Typography variant="h6" gutterBottom>
            Авторизация
          </Typography>
          <TextField placeholder="Логин" />
          <TextField type={"password"} placeholder="Пароль" />

          <Link to="/main">
            <Button>Войти</Button>
          </Link>
        </Box>
      </Paper>
    </>
  );
};
