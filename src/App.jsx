import { useContext } from "react";
import "./App.css";
import AppRouter from "./router";
import { UserContext } from "./context/userContext";

function App() {
  const value = useContext(UserContext);
  console.log(value);
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
