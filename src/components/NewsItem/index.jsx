import { Button, Paper, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import "./styles.sass";

export const NewsItem = ({
  title,
  body,
  date,
  approved,
  onApprove,
  onReject,
}) => {
  return (
    <div className="news-item">
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {body}
      </Typography>
      <div className="news-item__date">{date}</div>
      {!approved && (
        <div className="news-item__buttons">
          <Button title="отклонить" onClick={onReject}>
            <ClearIcon color="primary" />
          </Button>
          <Button title="подтвердить" onClick={onApprove}>
            <CheckIcon color="primary" />
          </Button>
        </div>
      )}
    </div>
  );
};
