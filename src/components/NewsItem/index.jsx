import { Button, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import { parseISO } from "date-fns";

import "./styles.sass";

export const NewsItem = ({
  title,
  body,
  date,
  approved,
  onApprove,
  onReject,
  isAdmin,
  isAuthorized,
}) => {
  if (!isAuthorized && !approved) return null;

  return (
    <div className="news-item">
      <Typography variant="h6" gutterBottom children={title} />
      <Typography variant="body1" gutterBottom children={body} />
      <div className="news-item__date">{parseISO(date).toLocaleString()}</div>

      {!approved && isAdmin && (
        <div className="news-item__buttons">
          <Button
            title="отклонить"
            onClick={onReject}
            children={<ClearIcon color="primary" />}
          />
          <Button
            title="подтвердить"
            onClick={onApprove}
            children={<CheckIcon color="primary" />}
          />
        </div>
      )}

      {!approved && !isAdmin && (
        <Typography
          variant="body1"
          gutterBottom
          children="Новость находиться на проверке"
        />
      )}
    </div>
  );
};
