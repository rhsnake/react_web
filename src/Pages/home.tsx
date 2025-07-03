import { useState } from "react";
import Alert from "../components/Alert";
import Button from "../components/Button";
import ListGroup from "../components/ListGroup";
import { Link } from "react-router-dom";

function Home() {
  let items = ["Chicken", "Pork", "Beef", "Mutton", "Fish", "Crocodile"];
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
        <Link to="/help">Help Page</Link>
      </div>
    </>
  );
}

export default Home;
