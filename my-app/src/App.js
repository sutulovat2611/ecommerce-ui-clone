import MainNavigation from "./components/Navigation/MainNavigation";
import SearchNavigation from "./components/Navigation/SearchNavigation";
import ClothesTypesNavigation from "./components/Navigation/ClothesTypesNavigation";
import GalleryPic from "./components/BigPictures/GalleryPic";
import AllItems from "./components/Items/AllItems";
import AllVouchers from "./components/Vouchers/AllVouchers";
import InlineNavigation from "./components/Navigation/InlineNavigation";
import SaleTitle from "./components/Items/SaleTitle";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="circle" />
      <div className="navigation">
        <MainNavigation className="all-items" />
        <SearchNavigation className="all-items" />
        <ClothesTypesNavigation className="all-items" />
        <GalleryPic className="all-items" />
      </div>
      <div className="main">
        <SaleTitle className="header" />
        <AllItems className="all-items" />
        <AllVouchers className="all-items" />
        <InlineNavigation className="all-items" />
        <AllItems className="all-items" />
      </div>
    </Router>
  );
}

export default App;
