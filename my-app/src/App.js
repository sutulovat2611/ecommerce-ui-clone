import MainNavigation from "./components/MainNavigation";
import SearchNavigation from "./components/SearchNavigation"
import {
  BrowserRouter as Router,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <MainNavigation />
      <SearchNavigation/>
    </Router>
    
  );
}

export default App;

