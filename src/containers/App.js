import "./App.css";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import Home from "./Home";
import Header from "../components/Header";
import Event from "./Event";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route path="/*" element={<NotFound />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </>
  );
}

export default App;
