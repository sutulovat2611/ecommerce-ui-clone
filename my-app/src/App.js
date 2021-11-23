import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import MainNavigation from "./components/Navigation/MainNavigation";
import SearchNavigation from "./components/Navigation/SearchNavigation";
import ClothesTypesNavigation from "./components/Navigation/ClothesTypesNavigation";
import GalleryPic from "./components/BigPictures/GalleryPic";
import AllItems from "./components/Items/AllItems"
import AllVouchers from "./components/Vouchers/AllVouchers"
import InlineNavigation from "./components/Navigation/InlineNavigation";

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
    <AllItems/>
    <AllVouchers/>
    <InlineNavigation/>
    <AllItems/>
  </Router>
  );
}

export default App;

