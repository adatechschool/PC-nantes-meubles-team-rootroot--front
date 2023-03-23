import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ButtonDesign from "../components/ButtonDesign";
import FooterFixed from "../components/FooterFixed";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/post_user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          password: user.password,
          role: "user",
        }),
      });

      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }

      const jsonData = await response.json();
      console.log(jsonData);
      navigate('/')
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="tab-content">
      <Header />
      <div className="container">
        <form className="form-profile" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Inscrivez-vous</legend>
            <div className="form-group">
              <label htmlFor="name">Pseudo</label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Jean-mi"
                value={user.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="mail@mail.com"
                value={user.email}
                onChange={handleChange}
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
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <ButtonDesign
                type="submit"
                color="secondary"
                value="Se connecter"
              />
            </div>
          </fieldset>
        </form>
      </div>
      <FooterFixed />
    </div>
  );
};

export default Registration;
