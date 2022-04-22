import data from "../data";

export const ADD_NEWS = "ADD_NEWS";
export const APPROVE_NEWS = "APPROVE_NEWS";
export const REJECT_NEWS = "REJECT_NEWS";

export default function newsReducer(state = data.news, action) {
  switch (action.type) {
    case ADD_NEWS:
      return [...state, action.payload];

    case APPROVE_NEWS:
      return state.map((news) =>
        news.id === action.payload ? { ...news, approved: true } : news
      );

    case REJECT_NEWS:
      return state.filter((news) => news.id !== action.payload);

    default:
      return state;
  }
}

export const addNews = (payload) => ({ type: ADD_NEWS, payload });
export const approveNews = (payload) => ({ type: APPROVE_NEWS, payload });
export const rejectNews = (payload) => ({ type: REJECT_NEWS, payload });
