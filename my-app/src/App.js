import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import MainNavigation from "./components/Navigation/MainNavigation";
import SearchNavigation from "./components/Navigation/SearchNavigation";
import ClothesTypesNavigation from "./components/Navigation/ClothesTypesNavigation";
import GalleryPic from "./components/BigPictures/GalleryPic";

import {
  BrowserRouter as Router,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <MainNavigation />
      <SearchNavigation/>
      <ClothesTypesNavigation/>
      <GalleryPic/>
    </Router>
  );
}

export default App;

