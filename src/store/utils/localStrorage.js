export const getUser = () => {
  const login = localStorage.getItem("login");
  const password = localStorage.getItem("password");
  const isAuthorized = localStorage.getItem("isAuthorized");
  const isAdmin = localStorage.getItem("isAdmin");
  return { login, password, isAuthorized, isAdmin };
};

export const addUser = (data) => {
  //   localStorage.setItem("login", data.login);
  //   localStorage.setItem("password", data.password);
  //   localStorage.setItem("isAuthorized", true);
  //   localStorage.setItem("isAdmin", data.isAdmin);
};
