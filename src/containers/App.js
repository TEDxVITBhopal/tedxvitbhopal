import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import Home from "./Home";
import Header from "../components/Header";
import Event from "./Event";
import Footer from "../components/Footer";
import BlogPage from "../components/blogs/blogComponent";
import Team from "./../components/team/Index";

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
              <Footer />
            </>
          }
        />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/event" element={<Event />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </>
  );
}

export default App;
