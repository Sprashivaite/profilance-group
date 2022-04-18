export const NewsItem = ({ title, body, date }) => {
  return (
    <>
      <div>{title}</div>
      <div>{body}</div>
      <div>{date}</div>
    </>
  );
};
