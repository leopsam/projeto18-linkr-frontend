import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserProvider } from "../contexts/LinkrContext";
import Signin from "../pages/sign-in/signin"
import Signup from "../pages/sign-up/signup"
import Timeline from "../pages/timeline/timeline"

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
  )
}