import Login from "./component/pages/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./component/pages/Signup";
import ForgotPassword from "./component/pages/ForgotPassword";
import Dashboard from "./component/pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
