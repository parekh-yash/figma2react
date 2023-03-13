import Login from "./component/pages/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./component/pages/Signup";
import ForgotPassword from "./component/pages/ForgotPassword";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
