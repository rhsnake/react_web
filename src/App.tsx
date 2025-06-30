import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Chicken", "Pork", "Beef", "Mutton", "Fish"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  
  return (
    <div>
      <ListGroup items={items} heading="Meat" onSelectItem={handleSelectItem} />
    </div>
  );
}

export default App;
