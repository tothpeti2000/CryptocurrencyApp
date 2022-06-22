import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorToast from "./components/ErrorToast";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <ErrorToast />
    </>
  );
}

export default App;
