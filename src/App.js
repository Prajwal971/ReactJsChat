import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./style.scss"
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {

  const {currentuser} = useContext(AuthContext)
  console.log(currentuser)
  return (
    <BrowserRouter>
      <Routes>
        {/* When ever we go to the Home page . */}
        <Route path="/">
          {/*  Home component will be called  . */}
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
