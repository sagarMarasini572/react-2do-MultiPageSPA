import NavBar from "../NavBar";
import { Route, Link, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  return (
    <>
      <NavBar />
      <div className="todo_container">
        {localStorage.getItem("loggedIn") ? (
          <>
            You are already logged in{" "}
            <b
              onClick={() => {
                localStorage.removeItem("loggedIn");
                history.push("/");
              }}
              style={{ color: "red", cursor: "pointer" }}
            >
              Logout
            </b>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                alert("You are Successfully logged in");
                history.replace("/");
                localStorage.setItem("loggedIn", true);
              }}
            >
              Login!
            </button>
            <br />
            <br />
            <Link to="/login/showInfo">Nested Route | Show Info</Link>

            <br />
            <br />

            {/* Nested Routing */}
            <Route path="/login/showInfo">
              <div>Thsi is dummy login and doesnot communicate with server</div>
            </Route>
          </>
        )}
      </div>
    </>
  );
};

export default Login;
