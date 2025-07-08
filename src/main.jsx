import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { store } from "./api/store.js";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";

const presetAdmin = () => {
  const users = JSON.parse(localStorage.getItem("users")) || []

  const adminExists = users.find((user)=>user.role === "admin")

if(!adminExists){
  const admin={
    firstname:"Admin",
    lastname:"admin",
    email:"admin@byte.com",
    password:"admin123",
    role:"admin"
  }
  localStorage.setItem("users",JSON.stringify([...users,admin]))
}
}

presetAdmin()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
