import { useState } from "react";
import Alert from "../components/Alert";
import Button from "../components/Button";
import ListGroup from "../components/ListGroup";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

function Home() {
  let items = ["Chicken", "Pork", "Beef", "Mutton", "Fish"];
  const [selectedItem, setSelectedItem] = useState("No item selected");

  const handleSelectItem = (item: string) => {
    setSelectedItem(item)
  };

  const [alertVisible,setAlertVisibility] = useState(false);


  return (
    <>
    <NavBar>

    </NavBar>
    <div>
      <ListGroup items={items} heading="Meat" onSelectItem={handleSelectItem} />
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}> {selectedItem} </Alert>}
      <Button color="dark" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
      <Link to= '/help'>Help Page</Link>
    </div>
    </>
  );
}

export default Home;
