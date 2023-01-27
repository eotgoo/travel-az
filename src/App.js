import { Routes, Route } from "react-router-dom";
import AuthPage from "./Pages/Auth";
import HomePage from "./Pages/Home/HomePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<AuthPage />} />
    </Routes>
  );
}

export default App;
