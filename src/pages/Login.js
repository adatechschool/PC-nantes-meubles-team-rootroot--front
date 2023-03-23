import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ButtonDesign from "./../components/ButtonDesign";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const userLogin = (event) => {
    event.preventDefault();
    console.log("email:", email);
    console.log("password:", password);
    //   try {
    //     fetch(`http://127.0.0.1:8000/get_user/${email}/${password}`).then(
    //       (res) => {
    //         console.log(res.json());
    //       }
    //     ).then();
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };

    const handleUser = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/get_user/${email}/${password}`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }

        const jsonData = await response.json();
        console.log(jsonData);

        if (jsonData[0].isAdmin) {
          console.log("hi");
          localStorage.setItem("isAdmin", "true");
          console.log(localStorage);

          navigate("/admin");
        } else if (jsonData[0].isAdmin === false) {
          console.log("bye");
          navigate("/");
        } else {
          navigate("/registration");
        }
      } catch (err) {
        console.log(err.message);
        navigate("/registration");
      }
    };

    handleUser();
  };

  return (
    <div className="tab-content">
      <Header />
      <form className="form-profile" onSubmit={userLogin}>
        <fieldset>
          <legend>Se connecter</legend>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="form-control"
              id="email"
              placeholder="mail@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" color="secondary" value="Se connecter">
              submit
            </button>
          </div>
        </fieldset>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
