export const isLoggedIn = () => {
  const session = JSON.parse(localStorage.getItem("session")) || {};
  console.log(session, "check");
  return session?.accessToken ?? session?.token;
};

export const setSession = (data) => {
  localStorage.setItem("session", JSON.stringify(data));
  window.dispatchEvent(new Event("storage"));
};

export const getSession = () =>
  JSON.parse(localStorage.getItem("session")) || {};

export const removeSession = () => localStorage.removeItem("session");
