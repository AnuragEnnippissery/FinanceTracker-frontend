import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
//import { AuthContext } from "../../context/AuthContext";
import { AuthContext } from "./authcontext";
import { toast } from "react-toastify";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { setUser } = useContext(AuthContext);   // ⭐ FIX 1: use context

  async function HandleLogin() {
    try {
      const res = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      console.log("Response from server:", data);

      if (!res.ok) {
        //alert(data.message || "Invalid username or password");
        toast.error("invalid user")
        return;
      }

      // ⭐ Save data
      localStorage.setItem("username", username);
      localStorage.setItem("id", data.id);
      localStorage.setItem("token", data.token);

      setUser(username);     // 🔥 FIX 2: Update global user → Navbar updates instantly
      toast.success("welcome user")

      navigate("/");

    } catch (err) {
      console.error("Login error:", err);
      //alert("Something went wrong. Try again!");
      toast.error("something went wrong , please register")
    }
  }

  function HandleClick() {
    navigate("/Register");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Login</h2>

      <input
        type="text"
        id="username"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ margin: "10px", padding: "8px" }}
      />
      <br />

      <input
        type="password"     // ⭐ FIX 3: hide password
        id="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ margin: "10px", padding: "8px" }}
      />
      <br />

      <button onClick={HandleLogin} style={{ margin: "10px", padding: "8px" }}>
        Login
      </button>
      <br />

      <small>
        Don't have an account?{" "}
        <button
          onClick={HandleClick}
          style={{
            color: "blue",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </small>
    </div>
  );
}

export default Login;
