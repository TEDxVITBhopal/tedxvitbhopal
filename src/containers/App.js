import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import Home from "./Home";
import Header from "../components/Header";
import Event from "./Event";
import Footer from '../components/Footer'
import BlogPage from "../components/blogs/blogComponent";

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
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </>
  );
}

export default App;
