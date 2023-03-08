import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "../contexts/LinkrContext";
import Signin from "../pages/Signin/index";
import Signup from "../pages/Signup/index";
import Timeline from "../pages/Timeline/index";

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}
