import Home from "./Home";
import About from "./About";
import Layout from "./Layout";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;