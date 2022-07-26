import RandomDrink from "./pages/RandomDrinkPage"
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Search from "./pages/Search";
import Drink from "./pages/Drink";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";


function App() {

  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/search/:name" element={<Search />} />
          <Route path="/random" element={<RandomDrink />} />
          <Route path="/drink/:name" element={<Drink />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;
