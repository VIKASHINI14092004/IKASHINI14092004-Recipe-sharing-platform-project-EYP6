import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} />   */}
        {/* <Route path="/" element={<Recipes />} /> */}
        <Route path="/recipe/:id" element={<RecipeDetails key={window.location.pathname} />} />
      </Routes>
    </Router>
  );
}

export default App;
