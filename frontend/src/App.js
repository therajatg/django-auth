import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Login } from "./containers/Login";
import { Home } from "./containers/Home";
import { RequiresAuth } from "./RequiresAuth";

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Routes>
        <Route
          path="/"
          element={
            <RequiresAuth>
              <Home />
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
