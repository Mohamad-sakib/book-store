export const PrivateRoute = ({ children }) => {
  const isAuthorized = true;
  return isAuthorized && children;
};
