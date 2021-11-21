import ItemList from "./ItemList";
import "./AllItems.css";
/* Icons */
import { BsLightningCharge } from "react-icons/bs";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "White Traditional Long Dress",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    sale: 25,
    new_price: 3.99,
    old_price: 5.99,
    colors: ["#f2e8e8", "#fe01b3", "#0091ff"],
    sizes: ["S", "M", "L"],
    rating: 4.2
  },

  {
    id: "m2",
    title: "Long Sleeve Denim Jacket",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    new_price: 3.99,
    sale: 25,
    old_price: 5.99,
    colors: ["#5b6b84", "#293243"],
    sizes: ["S", "M", "L"],
    rating: 4.3
  },
  {
    id: "m2",
    title: "Hush Puppies",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    sale: 55,
    new_price: 3.99,
    old_price: 5.99,
    colors: ["#f2e8e8", "black", "#fc4b4b"],
    sizes: ["S", "M", "L"],
    rating: 4.1
  },
  {
    id: "m2",
    title: "Athens Skirt",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    sale: 20,
    new_price: 3.99,
    old_price: 5.99,

    colors: ["#f2e8e8", "#fe01b3", "#0091ff"],
    sizes: ["S", "M", "L"],
    rating: 4.9
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    sale: 10,
    new_price: 3.99,
    old_price: 5.99,
    colors: ["#f2e8e8", "#fe01b3", "#0091ff"],
    sizes: ["S", "M", "L"],
    rating: 4.4
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    sale: 22,
    new_price: 3.99,
    old_price: 5.99,
    colors: ["#f2e8e8", "#fe01b3", "#0091ff"],
    sizes: ["S", "M", "L"],
    rating: 2.4
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    sale: 25,
    new_price: 3.99,
    old_price: 5.99,
    colors: ["#f2e8e8", "#fe01b3", "#0091ff"],
    sizes: ["S", "M", "L"],
    rating: 4.2
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    sale: 25,
    new_price: 3.99,
    old_price: 5.99,
    colors: ["#f2e8e8", "#fe01b3", "#0091ff"],
    sizes: ["S", "M", "L"],
    rating: 4.2
  }
];

function AllItems() {
  return (
    <section>
      <h1 className="header">
        <BsLightningCharge />
        Flash Sale
      </h1>
      <ItemList items={DUMMY_DATA} />
    </section>
  );
}

export default AllItems;
