import RandomDrink from "./pages/RandomDrinkPage"
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Search from "./pages/Search";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/search/:name" element={<Search />} />
          <Route path="/random" element={<RandomDrink />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
