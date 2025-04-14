import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function FormularioUsuario() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [mensaje, setMensaje] = useState("");

  const manejarSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!email.trim() || !pass.trim()) {
      setMensaje("Todos los campos son obligatorios");
      return;
    }

    setMensaje(`¡Bienvenido ${email}!`);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "400px" }}>
      <h2>Login with React</h2>

      <form
        onSubmit={manejarSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "8px" }}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          style={{ padding: "8px" }}
        />

        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Ingresar
        </button>
      </form>

      {mensaje && (
        <p
          style={{
            color: "green",
            marginTop: "1rem",
          }}
        >
          {mensaje}
        </p>
      )}
    </div>
  );
}

export default FormularioUsuario;
