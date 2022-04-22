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
import { useDispatch } from "react-redux";
import { formatISO } from "date-fns";

import { addNews } from "../../store/newsReducer";
import "./styles.sass";

export const NewsModal = (props) => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [error, setError] = useState(false);
  const [isDialogOpened, setIsDialogOpened] = useState(false);
  const dispatch = useDispatch();

  const handleButtonSignIn = () => {
    if (title && body) {
      dispatch(
        addNews({ title, body, id: Date.now(), date: formatISO(Date.now()) })
      );
      setIsDialogOpened(false);
      setTitle(null);
      setBody(null);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <Button
        {...props}
        onClick={() => setIsDialogOpened(true)}
        children="Добавить новость"
      />

      <Dialog
        open={isDialogOpened}
        onClose={() => setIsDialogOpened(false)}
        maxWidth="xs"
        fullWidth
      >
        <Paper className="news-modal">
          <DialogTitle>
            <Typography variant="h6" gutterBottom children="Добавить новость" />
          </DialogTitle>

          <DialogContent>
            <Box className="news-modal__container">
              <TextField
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Заголовок"
              />

              <TextField
                value={body}
                onChange={(event) => setBody(event.target.value)}
                placeholder="Текст"
              />

              {error && <Alert severity="error">Заполните все поля</Alert>}
            </Box>
          </DialogContent>

          <DialogActions>
            <Button
              className="news-modal__button"
              onClick={handleButtonSignIn}
              children="Добавить"
            />
          </DialogActions>
        </Paper>
      </Dialog>
    </>
  );
};
