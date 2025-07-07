import { useState } from "react";
import Alert from "../components/Alert";
import Button from "../components/Button";
import ListGroup from "../components/ListGroup";

class FoodItem{
  constructor(name:string , desc : string, price : string){
    this.name = name
    this.desc = desc
    this.price = price
  }
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
  const [selectedItem, setSelectedItem] = useState("No item selected");
  const [displayedItem, setDisplayedItem] = useState("No item selected");

  const handleSelectItem = (item: string) => {
    setSelectedItem(item);
  };


  const [alertVisible, setAlertVisibility] = useState(false);

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
        <Button color="dark" onClick={() => {setAlertVisibility(true); setDisplayedItem(selectedItem)}}>
          My Button
        </Button>
      </div>
    </>
  );
}

export default Home;
