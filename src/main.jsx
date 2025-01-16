import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
import { BrowserRouter, Routes, Route } from "react-router";
import AddUser from "./pages/AddUser.jsx";
import AddProject from "./pages/addProject.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/addproject" element={<AddProject />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
