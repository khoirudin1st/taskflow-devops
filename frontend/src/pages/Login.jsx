import { useState } from "react";
import api from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      console.log(email);
      console.log(password);
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem(
        "token",
        response.data.token
      );

      alert("Login berhasil 🚀");

        window.location.href =
        "/dashboard";
    } catch (error) {
      console.error(error);

      alert("Login gagal");
    }
  };

  return (
  <div className="container d-flex justify-content-center align-items-center vh-100">
    <div
      className="card p-4 shadow-lg"
      style={{
        width: "400px",
        backgroundColor: "#1f2937",
        color: "white",
        border: "none",
        borderRadius: "15px",
      }}
    >
      <h2 className="text-center mb-4">
        TaskFlow DevOps 🚀
      </h2>

      <input
        type="email"
        placeholder="Email"
        className="form-control mb-3"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Password"
        className="form-control mb-3"
          value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

        <button
        className="btn btn-primary w-100"
        onClick={handleLogin}
        >
        Login
      </button>
    </div>
  </div>
  );
}

export default Login;