import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { store } from "./api/store.js";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";

const presetAdmin = () => {
  const user = JSON.parse(localStorage.getItem("user")) || []

  const adminExists = user.find((user)=>user.role === "admin")

if(!adminExists){
  const admin={
    firstname:"Admin",
    email:"admin@byte.com",
    password:"admin123",
    role:"admin"
  }
  localStorage.setItem("user",JSON.stringify([...user,admin]))
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
