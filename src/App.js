import { BrowserRouter } from "react-router-dom";
import { IMAGE_URL } from "./consts";
import "./App.css";
import { AppRouter } from "./components/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
