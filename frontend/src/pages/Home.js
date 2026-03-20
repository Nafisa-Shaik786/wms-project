import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>📦 Warehouse Management System</h1>
      <p>Manage your products efficiently</p>

      <br />

      <button onClick={() => navigate("/products")}>
        Go to Products
      </button>
    </div>
  );
}

export default Home;