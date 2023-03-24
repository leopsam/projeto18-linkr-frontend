import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "../contexts/LinkrContext";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Timeline from "../pages/Timeline";

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}
