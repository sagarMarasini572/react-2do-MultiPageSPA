import { useHistory } from "react-router-dom";

// auth check function
const AuthCheck = () => {
  const history = useHistory();

  // if (localStorage.getItem("loggedIn")) {
  //   // do nothing
  // } else {
  //   history.replace("/login");
  // }

  !localStorage.getItem("loggedIn") && history.replace("/login");

  //   localStorage.getItem("loggedIn") ? (() => {})() : history.replace("/login");
};

export default AuthCheck;
