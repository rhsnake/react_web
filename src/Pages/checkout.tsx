import { useState, useEffect } from "react";
import Button from "../components/Button";

class FoodItem {
  constructor(name: string, desc: string, price: string) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.desc = desc;
    this.price = price;
  }
  id: string;
  name: string;
  desc: string;
  price: string;
}

function Checkout() {
  const [cartItem, setCartItem] = useState<FoodItem[]>(() => {
    const localvalue = localStorage.getItem("Cart");
    if (localvalue === null) return [];
    
    try {
    return JSON.parse(localvalue) as FoodItem[];
  } catch (e) {
    console.error("Failed to parse Cart from localStorage", e);
    return [];
  }
  });

  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(cartItem));
  }, [cartItem]);

  function removeCartItem(id: string) {
    setCartItem((currentCart) => {
      return currentCart.filter((cartItem) => cartItem.id != id);
    });
  }

  return (
    <>
      <h1>Welcome to the Checkout</h1>
      <div>
        {cartItem.length === 0 && <h2>Cart is Empty</h2>}
        <ul className="list-group">
          {cartItem.map((item, index) => (
              <div className ="form-check me-auto" key={item.id}>
                  <input className="form-check-input" type="checkbox" value="" />
                  <label className="form-check-label"  key={item.id}>
                        {item.name}  ${item.price}
                        <p>{item.desc}</p>
                        <Button
                        color="danger"
                        onClick={() => removeCartItem(item.id)}
                        >
                        Remove
                        </Button>
                  </label>
                  </div>
              
          ))}
        </ul>
      </div>
    </>
  );
}

export default Checkout;
