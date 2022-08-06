import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Navbar/NavBar";
import Footer from "./Footer/Footer";
import HomePage from "./HomePage/HomePage";
import Product from "./Products/Product";
import Blog from "./Blog/Blog";
import Gallery from "./Gallery/Gallery";
import SingleBlog from "./Blog/SingleBlog/singleBlog";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="blogs/:blogid" element={<SingleBlog />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="products" element={<Product />} />

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
