const logoutUser = () => {
  localStorage.clear();
  window.location.href = "/";
};

export { logoutUser };
