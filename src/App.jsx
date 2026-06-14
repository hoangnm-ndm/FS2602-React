import { Link, NavLink, Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/client/HomePage";
import AboutPage from "./pages/client/AboutPage";
import ContactPage from "./pages/client/ContactPage";
import NotFoundPage from "./pages/client/NotFoundPage";
import ProductPage from "./pages/client/ProductPage";
import AppRouter from "./router";

function App() {
  return (
    <>
      {/* <header>
        <div className="logo">Logo</div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/about">About</NavLink>
            </li>

            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductPage />}></Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes> */}

      <AppRouter />
    </>
  );
}

export default App;
