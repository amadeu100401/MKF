import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ForgotPasswordScreen } from "./components/homeScreens/ForgotPasswordScreen";
import { LoginScreen } from "./components/homeScreens/loginScreen";
import { RegistrationScreen } from "./components/homeScreens/registrationScreen";
import { GlobalHomeStyle } from "./components/homeScreens/styles/global";
import { Dashboard } from "./components/main/Dashboard";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<LoginScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/registration" element={<RegistrationScreen />} />
          <Route path="/forgotPassword" element={<ForgotPasswordScreen />} />
        </Routes>
        <GlobalHomeStyle />
        <Routes>
          <Route path="/home" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
