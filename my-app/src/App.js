import MainNavigation from "./components/MainNavigation";
import SearchNavigation from "./components/SearchNavigation";
import ClothesTypesNavigation from "./components/ClothesTypesNavigation";
import {
  BrowserRouter as Router,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <MainNavigation />
      <SearchNavigation/>
      <ClothesTypesNavigation/>
    </Router>
  );
}

export default App;

