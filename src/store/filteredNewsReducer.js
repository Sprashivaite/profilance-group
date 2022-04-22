export const GET_FILTERED_NEWS = "GET_FILTERED_NEWS";

export default function filteredNewsReducer(state = [], action) {
  switch (action.type) {
    case GET_FILTERED_NEWS:
      if (!action.payload.value) return action.payload.news;
      const regExp = new RegExp(action.payload.value, "gi");
      const news = action.payload.news;
      return news.filter(
        (news) => news.body.match(regExp) || news.title.match(regExp)
      );
    default:
      return state;
  }
}

export const getFilteredNews = (payload) => ({
  type: GET_FILTERED_NEWS,
  payload,
});
