import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/about"
          element={<Navigate to={{ pathname: "/", hash: "about" }} replace />}
        />
        <Route
          path="/projects"
          element={<Navigate to={{ pathname: "/", hash: "projects" }} replace />}
        />
        <Route
          path="/contact"
          element={<Navigate to={{ pathname: "/", hash: "contact" }} replace />}
        />
      </Routes>
    </div>
  );
}

export default App;
