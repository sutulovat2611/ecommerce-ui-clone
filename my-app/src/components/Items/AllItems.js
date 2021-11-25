/* Importing other components */
import ItemList from "./ItemList";

/* Importing the scss file for styling */
import "./AllItems.scss";

/* Importing pictures */
import pic1 from "./Pictures/pic1.jpg";
import pic2 from "./Pictures/pic2.jpg";
import pic3 from "./Pictures/pic3.jpg";
import pic4 from "./Pictures/pic4.jpg";
import pic5 from "./Pictures/pic5.jpg";
import pic6 from "./Pictures/pic6.jpg";
import pic7 from "./Pictures/pic7.jpg";
import pic8 from "./Pictures/pic8.jpg";

const data = [
  {
    id: "i1",
    title: "White Traditional Long Dress",
    image:
      pic1,
    sale: 25,
    new_price: 3.99,
    old_price: 5.99,
    colors: ["#f2e8e8", "#fe01b3", "#0091ff"],
    sizes: ["S", "M", "L"],
    rating: 4.2,
    sku: "00116c-23",
    brand_name: "Brandname",
  },

  {
    id: "i2",
    title: "Long Sleeve Denim Jacket",
    image:
      pic2,
    new_price: 3.99,
    sale: 25,
    old_price: 5.99,
    colors: ["#5b6b84", "#293243"],
    sizes: ["S", "M", "L"],
    rating: 4.3,
    sku: "00116c-23",
    brand_name: "Brandname",
  },
  {
    id: "i3",
    title: "Hush Puppies",
    image:
     pic3,
    sale: 55,
    new_price: 3.99,
    old_price: 5.99,
    colors: ["#f2e8e8", "black", "#fc4b4b"],
    sizes: ["S", "M", "L"],
    rating: 4.1,
    sku: "00116c-23",
    brand_name: "Brandname",
  },
  {
    id: "i4",
    title: "Athens Skirt",
    image:
      pic4,
    sale: 20,
    new_price: 3.99,
    old_price: 5.99,

    colors: ["#f2e8e8", "#fe01b3", "#0091ff"],
    sizes: ["S", "M", "L"],
    rating: 4.9,
    sku: "00116c-23",
    brand_name: "Brandname",
  },
  {
    id: "i5",
    title: "Item No.5",
    image:
      pic5,
    sale: 10,
    new_price: 3.99,
    old_price: 5.99,
    colors: ["#f2e8e8", "#fe01b3", "#0091ff"],
    sizes: ["S", "M", "L"],
    rating: 4.4,
    sku: "00116c-23",
    brand_name: "Brandname",
  },
  {
    id: "i6",
    title: "Item No.6",
    image:
      pic6,
    sale: 22,
    new_price: 3.99,
    old_price: 5.99,
    colors: ["#f2e8e8", "#fe01b3", "#0091ff"],
    sizes: ["S", "M", "L"],
    rating: 2.4,
    sku: "00116c-23",
    brand_name: "Brandname",
  },
  {
    id: "i7",
    title: "Item No.7",
    image:
      pic7,
    sale: 25,
    new_price: 3.99,
    old_price: 5.99,
    colors: ["#f2e8e8", "#fe01b3", "#0091ff"],
    sizes: ["S", "M", "L"],
    rating: 4.2,
    sku: "00116c-23",
    brand_name: "Brandname",
  },
  {
    id: "i8",
    title: "Item No.8",
    image:
      pic8,
    sale: 25,
    new_price: 3.99,
    old_price: 5.99,
    colors: ["#f2e8e8", "#fe01b3", "#0091ff"],
    sizes: ["S", "M", "L"],
    rating: 4.2,
    sku: "00116c-23",
    brand_name: "Brandname",
  },
];

window.localStorage.setItem('items_data', JSON.stringify(data));

function AllItems() {
  return (
    <section>
      <ItemList items={JSON.parse(window.localStorage.getItem('items_data'))} />
    </section>
  );
}

export default AllItems;
