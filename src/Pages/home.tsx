import { useEffect, useState } from "react";
import Alert from "../components/Alert";
import Button from "../components/Button";
import ListGroup from "../components/ListGroup";

class FoodItem{
  constructor(name:string , desc : string, price : string){
    this.id = crypto.randomUUID();
    this.name = name;
    this.desc = desc;
    this.price = price;
  }
  id : string;
  name : string;
  desc : string;
  price : string;
}

function Home() {
  const chicken = new FoodItem("chicken","KFC","10");
  const pork = new FoodItem("pork","A5 Iberico Pork","75");
  const beef = new FoodItem("beef","A5 Kobe beef","100");
  const mutton =new FoodItem("mutton","lamb","15");
  const fish = new FoodItem("fish","Fresh from the Singapore River","5");
  const crocodile = new FoodItem("crocodile","From the rivers of austrilia","30");
  let items = [chicken, pork, beef, mutton, fish, crocodile];
  const [selectedItemDesc, setSelectedItemDesc] = useState("No item selected");
  const [displayedItem, setDisplayedItem] = useState("No item selected");
  const [alertVisible, setAlertVisibility] = useState(false);
  const [cartItem, setCartItem] = useState<FoodItem[]>(()=> {
    const localvalue = localStorage.getItem("Cart");
    if (localvalue === null) return [];
    return JSON.parse(localvalue)
  });

  const handleSelectItem = (item: string) => {
    setSelectedItemDesc(item);
  };

  useEffect(()=> {
    localStorage.setItem("Cart",JSON.stringify(cartItem));
  }
  ,[cartItem])

  function addCartItem (food : string){
    if (food === "No item selected") return

    let input = items.find((item)=>{
      return item.desc === food
    })
    
    if (input) {
      setCartItem([...cartItem,input])
    }
    
  }

  return (
    <>
      <div>
        <ListGroup
          items={items}
          heading="Meat"
          onSelectItem={handleSelectItem}
        />
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>
            {displayedItem}
          </Alert>
        )}
        <Button color="dark" onClick={() => {setAlertVisibility(true); setDisplayedItem(selectedItemDesc)}}>
          Product Description
        </Button>
      </div>
      <Button color="danger" onClick={() => addCartItem(selectedItemDesc)}>
        Add to Cart
      </Button>

      <ListGroup items={cartItem} heading="Cart" onSelectItem={handleSelectItem}></ListGroup>
    </>
  );
}

export default Home;
